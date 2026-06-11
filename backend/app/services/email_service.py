import aiosmtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)


async def send_contact_notification(contact_data: dict) -> bool:
    """
    Envía un email a Osman cuando alguien llena el formulario de contacto.
    Retorna True si fue exitoso, False si hubo error (no bloquea la respuesta al usuario).
    """
    if not settings.SMTP_USER or not settings.EMAIL_TO:
        logger.warning("Email no configurado — saltando notificación")
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"🚀 Nuevo contacto: {contact_data['name']} — {contact_data['service']}"
        msg["From"] = settings.SMTP_USER
        msg["To"] = settings.EMAIL_TO

        html_body = f"""
        <html>
        <body style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
                Nuevo mensaje desde tu portafolio
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; font-weight: bold; width: 140px;">Nombre:</td>
                    <td style="padding: 8px;">{contact_data['name']}</td>
                </tr>
                <tr style="background: #F5F5F5;">
                    <td style="padding: 8px; font-weight: bold;">Email:</td>
                    <td style="padding: 8px;">
                        <a href="mailto:{contact_data['email']}">{contact_data['email']}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold;">WhatsApp:</td>
                    <td style="padding: 8px;">{contact_data.get('whatsapp') or 'No proporcionado'}</td>
                </tr>
                <tr style="background: #F5F5F5;">
                    <td style="padding: 8px; font-weight: bold;">Servicio:</td>
                    <td style="padding: 8px;">{contact_data['service']}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold;">Presupuesto:</td>
                    <td style="padding: 8px;">{contact_data.get('budget') or 'No especificado'}</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #EFF6FF; border-left: 4px solid #2563EB; border-radius: 4px;">
                <strong>Mensaje:</strong>
                <p style="margin-top: 8px;">{contact_data['message']}</p>
            </div>

            <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:{contact_data['email']}"
                   style="background: #2563EB; color: white; padding: 12px 24px;
                          text-decoration: none; border-radius: 8px; font-weight: bold;">
                    Responder ahora
                </a>
            </div>
        </body>
        </html>
        """

        msg.attach(MIMEText(html_body, "html"))

        await aiosmtplib.send(
            msg,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASSWORD,
            start_tls=True,
            timeout=15,
        )

        logger.info(f"Email de notificación enviado para contacto: {contact_data['email']}")
        return True

    except Exception as e:
        logger.error(f"Error enviando email: {e}")
        return False
