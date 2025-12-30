import imaplib
import email
from email.header import decode_header
from typing import List, Dict
import os
from services.email_parser import EmailParser
from models.job_offer import JobOffer
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

class EmailService:
    def __init__(self):
        self.email_address = os.getenv('JOB_EMAIL', 'personal@bau-connect.eu')
        self.email_password = os.getenv('JOB_EMAIL_PASSWORD', '')
        self.imap_server = os.getenv('IMAP_SERVER', 'imap.gmail.com')
        self.parser = EmailParser()
        
    async def fetch_new_job_offers(self) -> List[Dict]:
        """
        Fetch new job offers from email
        Returns list of parsed job offers
        """
        try:
            # Connect to IMAP server
            mail = imaplib.IMAP4_SSL(self.imap_server)
            mail.login(self.email_address, self.email_password)
            mail.select('inbox')
            
            # Search for unseen emails
            status, messages = mail.search(None, 'UNSEEN')
            email_ids = messages[0].split()
            
            job_offers = []
            
            for email_id in email_ids:
                # Fetch email
                status, msg_data = mail.fetch(email_id, '(RFC822)')
                
                for response_part in msg_data:
                    if isinstance(response_part, tuple):
                        msg = email.message_from_bytes(response_part[1])
                        
                        # Get subject
                        subject = self._decode_subject(msg['subject'])
                        
                        # Get body
                        body = self._get_email_body(msg)
                        
                        if body:
                            # Parse job offer
                            job_data = self.parser.parse_job_offer(body)
                            
                            if job_data:
                                job_data['email_subject'] = subject
                                job_offers.append(job_data)
            
            mail.close()
            mail.logout()
            
            return job_offers
            
        except Exception as e:
            print(f"Error fetching emails: {str(e)}")
            return []
    
    def _decode_subject(self, subject):
        """Decode email subject"""
        if subject:
            decoded = decode_header(subject)[0]
            if isinstance(decoded[0], bytes):
                return decoded[0].decode(decoded[1] or 'utf-8')
            return decoded[0]
        return ""
    
    def _get_email_body(self, msg):
        """Extract email body"""
        body = ""
        
        if msg.is_multipart():
            for part in msg.walk():
                content_type = part.get_content_type()
                content_disposition = str(part.get("Content-Disposition"))
                
                if content_type == "text/plain" and "attachment" not in content_disposition:
                    try:
                        body = part.get_payload(decode=True).decode()
                        break
                    except:
                        pass
        else:
            try:
                body = msg.get_payload(decode=True).decode()
            except:
                pass
        
        return body

async def process_new_job_offers():
    """
    Process new job offers from email and save to database
    This function will be called by cron job
    """
    try:
        # Initialize services
        email_service = EmailService()
        
        # MongoDB connection
        mongo_url = os.environ['MONGO_URL']
        client = AsyncIOMotorClient(mongo_url)
        db = client[os.environ['DB_NAME']]
        
        # Fetch new job offers
        job_offers = await email_service.fetch_new_job_offers()
        
        # Save to database
        saved_count = 0
        for job_data in job_offers:
            job_obj = JobOffer(**job_data)
            
            # Check if similar job already exists (prevent duplicates)
            existing = await db.job_offers.find_one({
                "lokalita": job_obj.lokalita,
                "typ_prace": job_obj.typ_prace,
                "is_active": True
            })
            
            if not existing:
                await db.job_offers.insert_one(job_obj.dict())
                saved_count += 1
        
        print(f"Processed {len(job_offers)} emails, saved {saved_count} new job offers")
        
        return {"processed": len(job_offers), "saved": saved_count}
        
    except Exception as e:
        print(f"Error processing job offers: {str(e)}")
        return {"error": str(e)}
