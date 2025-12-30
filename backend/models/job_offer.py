from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class JobOffer(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    lokalita: str
    typ_prace: str
    pocet_pracovnikov: str
    zaciatok: str
    hodinova_sazba: str
    poziadavky: str
    vybavenie: str
    praca_v_sobotu: str
    ubytovanie: str
    splatnost: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True
    email_subject: Optional[str] = None

class JobOfferCreate(BaseModel):
    lokalita: str
    typ_prace: str
    pocet_pracovnikov: str
    zaciatok: str
    hodinova_sazba: str
    poziadavky: str
    vybavenie: str
    praca_v_sobotu: str
    ubytovanie: str
    splatnost: str

class JobOfferUpdate(BaseModel):
    lokalita: Optional[str] = None
    typ_prace: Optional[str] = None
    pocet_pracovnikov: Optional[str] = None
    zaciatok: Optional[str] = None
    hodinova_sazba: Optional[str] = None
    poziadavky: Optional[str] = None
    vybavenie: Optional[str] = None
    praca_v_sobotu: Optional[str] = None
    ubytovanie: Optional[str] = None
    splatnost: Optional[str] = None
    is_active: Optional[bool] = None
