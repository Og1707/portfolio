from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
from datetime import datetime
from app.models.contact import ContactStatus


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    whatsapp: Optional[str] = None
    service: str
    message: str
    budget: Optional[str] = None

    @field_validator('name')
    @classmethod
    def name_must_be_valid(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError('El nombre debe tener al menos 2 caracteres')
        if len(v) > 100:
            raise ValueError('El nombre no puede superar 100 caracteres')
        return v

    @field_validator('message')
    @classmethod
    def message_must_be_valid(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 10:
            raise ValueError('El mensaje debe tener al menos 10 caracteres')
        if len(v) > 2000:
            raise ValueError('El mensaje no puede superar 2000 caracteres')
        return v

    @field_validator('service')
    @classmethod
    def service_must_be_valid(cls, v: str) -> str:
        allowed = [
            'software-medida',
            'automatizacion',
            'bot-ia',
            'mantenimiento',
            'otro'
        ]
        if v not in allowed:
            raise ValueError(f'Servicio inválido. Opciones: {allowed}')
        return v

    @field_validator('whatsapp')
    @classmethod
    def whatsapp_format(cls, v: Optional[str]) -> Optional[str]:
        if v is None:
            return v
        digits = ''.join(filter(str.isdigit, v))
        if len(digits) < 7 or len(digits) > 15:
            raise ValueError('Número de WhatsApp inválido')
        return v


class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    service: str
    status: ContactStatus
    created_at: datetime

    model_config = {"from_attributes": True}
