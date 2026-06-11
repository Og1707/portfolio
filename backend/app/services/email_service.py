import asyncio
import html
import logging

import resend

from app.core.config import settings

logger = logging.getLogger(__name__)


def _escape_text(value: object, fallback: str) -> str:
        text = str(value).strip() if value not in (None, "") else fallback
        return html.escape(text)


def _build_html(contact_data: dict) -> str:
        name = _escape_text(contact_data.get("name"), "Sin nombre")
        email = _escape_text(contact_data.get("email"), "No proporcionado")
        whatsapp = _escape_text(contact_data.get("whatsapp"), "No proporcionado")
        service = _escape_text(contact_data.get("service"), "No especificado")
        budget = _escape_text(contact_data.get("budget"), "No especificado")
        message = html.escape(str(contact_data.get("message") or "")).replace("\n", "<br>")

        return f"""<!DOCTYPE html>
<html lang="es">
    <body style="margin:0;padding:0;background:#f3f6fb;font-family:Inter,Arial,sans-serif;color:#0f172a;">
        <div style="max-width:720px;margin:0 auto;padding:32px 16px;">
            <div style="background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);border-radius:20px 20px 0 0;padding:32px;color:#fff;">
                <div style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;opacity:.85;">
                    Nueva solicitud desde el portafolio
                </div>
                <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;">
                    🚀 Nueva solicitud: {name} — {service}
                </h1>
                <p style="margin:12px 0 0;font-size:15px;line-height:1.6;opacity:.92;">
                    Recibiste una nueva solicitud desde el formulario de contacto.
                </p>
            </div>

            <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 20px 20px;padding:32px;">
                <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
                    <tr>
                        <td style="padding:12px 0;width:150px;color:#64748b;font-weight:600;">Nombre</td>
                        <td style="padding:12px 0;color:#0f172a;">{name}</td>
                    </tr>
                    <tr style="border-top:1px solid #eef2f7;">
                        <td style="padding:12px 0;color:#64748b;font-weight:600;">Email</td>
                        <td style="padding:12px 0;color:#0f172a;"><a href="mailto:{email}" style="color:#2563eb;text-decoration:none;">{email}</a></td>
                    </tr>
                    <tr style="border-top:1px solid #eef2f7;">
                        <td style="padding:12px 0;color:#64748b;font-weight:600;">WhatsApp</td>
                        <td style="padding:12px 0;color:#0f172a;">{whatsapp}</td>
                    </tr>
                    <tr style="border-top:1px solid #eef2f7;">
                        <td style="padding:12px 0;color:#64748b;font-weight:600;">Servicio</td>
                        <td style="padding:12px 0;color:#0f172a;">{service}</td>
                    </tr>
                    <tr style="border-top:1px solid #eef2f7;">
                        <td style="padding:12px 0;color:#64748b;font-weight:600;">Presupuesto</td>
                        <td style="padding:12px 0;color:#0f172a;">{budget}</td>
                    </tr>
                </table>

                <div style="margin-top:28px;padding:20px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
                    <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#1d4ed8;margin-bottom:10px;">
                        Mensaje
                    </div>
                    <div style="font-size:15px;line-height:1.8;color:#0f172a;">{message}</div>
                </div>
            </div>
        </div>
    </body>
</html>
"""


async def send_contact_notification(contact_data: dict) -> bool:
        """
        Envía una notificación por Resend cuando alguien llena el formulario de contacto.
        Retorna True si fue exitoso, False si hubo error sin bloquear la respuesta.
        """
        if not settings.RESEND_API_KEY or not settings.EMAIL_TO or not settings.EMAIL_FROM:
                logger.warning("Resend no está configurado completamente; se omite la notificación")
                return False

        try:
                resend.api_key = settings.RESEND_API_KEY

                reply_to_email = str(contact_data.get("email") or "").strip()
                params = {
                        "from": settings.EMAIL_FROM,
                        "to": [settings.EMAIL_TO],
                        "subject": f"🚀 Nueva solicitud 💵: {str(contact_data.get('name') or 'Sin nombre').strip()} — {str(contact_data.get('service') or 'Sin servicio').strip()}",
                        "html": _build_html(contact_data),
                }

                if reply_to_email:
                        params["reply_to"] = [reply_to_email]

                await asyncio.to_thread(resend.Emails.send, params)

                logger.info("Notificación enviada por Resend para %s", reply_to_email or "contacto sin email")
                return True

        except Exception:
                logger.exception("Error enviando notificación por Resend")
                return False
