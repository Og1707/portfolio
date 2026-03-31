from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # General
    APP_NAME: str = "Osman Pérez Portfolio API"
    APP_ENV: str = "development"
    DEBUG: bool = True

    # Base de datos
    DATABASE_URL: str = "sqlite+aiosqlite:///./portfolio.db"

    # CORS
    ALLOWED_ORIGINS: str = "http://localhost:3000"

    # Email
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    EMAIL_TO: str = ""

    # Rate limiting
    RATE_LIMIT_CONTACT: str = "5/minute"

    @property
    def origins_list(self) -> List[str]:
        return [o.strip() for o in self.ALLOWED_ORIGINS.split(",")]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
