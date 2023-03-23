import threading, random
from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.core.cache import cache


from twilio.rest import Client


account_sid = settings.TWILIO_ACCOUNT_SID
auth_token = settings.TWILIO_AUTH_TOKEN

twilio_client = Client(account_sid, auth_token)

message = twilio_client.messages.create(
    from_ = 'whatsapp:+14155238886',
    body = 'Hello',
    to = 'whatsapp:+918007609672'
)


context = {}

class send_forgot_link(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            otp = random.randint(100001, 999999)
            cache.set(otp, self.email, timeout=350)
            context["otp"] = otp
            html_template = 'forgot.html'
            html_message = render_to_string(html_template, context)
            subject = 'OTP to Verify your Account.'
            email_from = settings.EMAIL_HOST_USER
            msg = EmailMessage(subject, html_message, email_from, [self.email])
            msg.content_subtype = 'html'
            print(otp)
            msg.send()
        except Exception as e:
                print(e)


class send_notification(threading.Thread):
    def __init__(self, relatives_list):
        self.relatives_list = relatives_list
        threading.Thread.__init__(self)
    def run(self):
        try:
            twilio_client.messages.create(
                from_ = 'whatsapp:+14752675057',
                body = 'Hello',
                to = f"whatsapp:+91{phone}"
            )
        except Exception as e:
            print(e)
