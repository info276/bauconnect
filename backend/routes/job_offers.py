from fastapi import APIRouter, HTTPException, Depends
from typing import List
from models.job_offer import JobOffer, JobOfferCreate, JobOfferUpdate
from datetime import datetime
import os
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter(prefix="/api/jobs", tags=["jobs"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("", response_model=List[JobOffer])
async def get_all_jobs(active_only: bool = True, limit: int = 100):
    """
    Get all job offers
    """
    query = {"is_active": True} if active_only else {}
    jobs = await db.job_offers.find(query).sort("created_at", -1).limit(limit).to_list(limit)
    return [JobOffer(**job) for job in jobs]

@router.get("/recent", response_model=List[JobOffer])
async def get_recent_jobs(limit: int = 5):
    """
    Get recent active job offers for homepage
    """
    jobs = await db.job_offers.find({"is_active": True}).sort("created_at", -1).limit(limit).to_list(limit)
    return [JobOffer(**job) for job in jobs]

@router.get("/{job_id}", response_model=JobOffer)
async def get_job(job_id: str):
    """
    Get single job offer by ID
    """
    job = await db.job_offers.find_one({"id": job_id})
    if not job:
        raise HTTPException(status_code=404, detail="Job offer not found")
    return JobOffer(**job)

@router.post("", response_model=JobOffer)
async def create_job(job: JobOfferCreate):
    """
    Create new job offer (manual)
    """
    job_dict = job.dict()
    job_obj = JobOffer(**job_dict)
    await db.job_offers.insert_one(job_obj.dict())
    return job_obj

@router.put("/{job_id}", response_model=JobOffer)
async def update_job(job_id: str, job_update: JobOfferUpdate):
    """
    Update existing job offer
    """
    existing_job = await db.job_offers.find_one({"id": job_id})
    if not existing_job:
        raise HTTPException(status_code=404, detail="Job offer not found")
    
    update_data = {k: v for k, v in job_update.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.job_offers.update_one(
        {"id": job_id},
        {"$set": update_data}
    )
    
    updated_job = await db.job_offers.find_one({"id": job_id})
    return JobOffer(**updated_job)

@router.delete("/{job_id}")
async def delete_job(job_id: str):
    """
    Soft delete job offer (set is_active to False)
    """
    result = await db.job_offers.update_one(
        {"id": job_id},
        {"$set": {"is_active": False, "updated_at": datetime.utcnow()}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Job offer not found")
    
    return {"message": "Job offer deleted successfully"}
