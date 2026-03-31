import uuid
from datetime import datetime
from sqlalchemy import String, Text, DateTime, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base
import enum


class ContactStatus(str, enum.Enum):
    NEW = "new"
    READ = "read"
    REPLIED = "replied"


class Contact(Base):
    __tablename__ = "contacts"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(150), nullable=False)
    whatsapp: Mapped[str | None] = mapped_column(String(20), nullable=True)
    service: Mapped[str] = mapped_column(String(50), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    budget: Mapped[str | None] = mapped_column(String(50), nullable=True)
    status: Mapped[ContactStatus] = mapped_column(
        SAEnum(ContactStatus), default=ContactStatus.NEW, nullable=False
    )
    ip_address: Mapped[str | None] = mapped_column(String(45), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow, nullable=False
    )

    def __repr__(self) -> str:
        return f"<Contact {self.name} - {self.email} ({self.status})>"
