from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.core.database import init_db
from app.api.v1 import api_router


# ─────────────────────────────────────
# Rate limiter global
# ─────────────────────────────────────
limiter = Limiter(key_func=get_remote_address)


# ─────────────────────────────────────
# Lifecycle: startup / shutdown
# ─────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: crear tablas si no existen (solo desarrollo)
    if settings.APP_ENV == "development":
        await init_db()
    yield
    # Shutdown: aquí irían cierres de conexiones adicionales


# ─────────────────────────────────────
# App principal
# ─────────────────────────────────────
app = FastAPI(
    title=settings.APP_NAME,
    description="API del portafolio profesional de Osman Pérez — Backend Developer & Automation Engineer",
    version="1.0.0",
    docs_url="/docs" if settings.DEBUG else None,       # Deshabilita Swagger en producción
    redoc_url="/redoc" if settings.DEBUG else None,
    lifespan=lifespan,
)

# Rate limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Rutas
app.include_router(api_router, prefix="/api/v1")


# ─────────────────────────────────────
# Ruta raíz (útil para verificar deploy)
# ─────────────────────────────────────
@app.get("/", include_in_schema=False)
async def root():
    return {
        "message": "Osman Pérez Portfolio API",
        "docs": "/docs",
        "status": "running"
    }
