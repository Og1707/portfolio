from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase
from app.core.config import settings


# Motor de base de datos async
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,     # Muestra SQL en consola durante desarrollo
    future=True,
)

# Fábrica de sesiones
AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


# Clase base para todos los modelos
class Base(DeclarativeBase):
    pass


# Dependency para inyectar la sesión en los endpoints
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


# Crear tablas en desarrollo (en producción usa Alembic)
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
