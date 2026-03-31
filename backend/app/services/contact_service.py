from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.contact import Contact
from app.schemas.contact import ContactCreate
from app.services.email_service import send_contact_notification
import logging

logger = logging.getLogger(__name__)


async def create_contact(
    db: AsyncSession,
    data: ContactCreate,
    ip_address: str | None = None
) -> Contact:
    """
    Guarda el contacto en la base de datos y dispara la notificación por email.
    La lógica de negocio vive aquí, NO en el router.
    """

    # Crear instancia del modelo
    contact = Contact(
        name=data.name,
        email=data.email,
        whatsapp=data.whatsapp,
        service=data.service,
        message=data.message,
        budget=data.budget,
        ip_address=ip_address,
    )

    db.add(contact)
    await db.flush()  # Genera el ID sin hacer commit aún

    # Enviar notificación por email (no bloquea si falla)
    await send_contact_notification({
        "name": data.name,
        "email": data.email,
        "whatsapp": data.whatsapp,
        "service": data.service,
        "message": data.message,
        "budget": data.budget,
    })

    logger.info(f"Nuevo contacto guardado: {contact.id} — {contact.email}")
    return contact


async def get_contacts(db: AsyncSession, skip: int = 0, limit: int = 50):
    """Lista todos los contactos (para panel admin futuro)."""
    result = await db.execute(
        select(Contact).order_by(Contact.created_at.desc()).offset(skip).limit(limit)
    )
    return result.scalars().all()
