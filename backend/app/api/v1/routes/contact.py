from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from slowapi import Limiter
from slowapi.util import get_remote_address
import traceback

from app.core.database import get_db
from app.core.config import settings
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.contact_service import create_contact

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=201,
    tags=["Contacto"],
    summary="Enviar mensaje de contacto",
    description="Recibe el formulario de contacto, lo guarda en DB y envía notificación por email.",
)
@limiter.limit(settings.RATE_LIMIT_CONTACT)
async def send_contact(
    request: Request,
    data: ContactCreate,
    db: AsyncSession = Depends(get_db),
):
    """
    POST /api/v1/contact

    Body:
    - name: Nombre completo (requerido)
    - email: Email válido (requerido)
    - whatsapp: Número con código de país (opcional)
    - service: Tipo de servicio de interés (requerido)
    - message: Descripción del proyecto (requerido)
    - budget: Presupuesto aproximado (opcional)

    Responde con los datos del contacto creado + id + timestamp.
    """
    try:
        ip = request.client.host if request.client else None
        contact = await create_contact(db=db, data=data, ip_address=ip)
        return contact
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except Exception as e:
        print(traceback.format_exc())
        raise HTTPException(
            status_code=500,
            detail=str(e) or "Error interno al procesar el contacto. Intenta nuevamente más tarde.",
        )
