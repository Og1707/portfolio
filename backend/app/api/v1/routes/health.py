from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/health", tags=["Sistema"])
async def health_check():
    """
    Endpoint para verificar que el servidor está activo.
    Usado por Railway para health checks y por el frontend al cargar.
    """
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "Osman Pérez Portfolio API",
    }
