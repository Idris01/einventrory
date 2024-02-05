import smtplib
import getpass
import random

class Email:
    def __init__(self) -> None:
        self.verify_code = None

    def generate_password(self):
        self.verify_code = str(random.randint(100000, 999999))
        return self.verify_code
    
    def send_mail(self, email, vCode):
        subject = 'Email Verification Code'
        body = f'Your email verification code is {vCode}'

        sender_mail = 'udehdinobi@gmail.com'
        sender_pass = 'xcpp mdno byuu ovlu'

        message2 = f'Subject: {subject}\n\n{body}'
        
        session = smtplib.SMTP('smtp.gmail.com', 587)
        session.starttls()
        session.login(sender_mail, sender_pass)
        session.sendmail(
            from_addr=sender_mail,
            to_addrs=email,
            msg=message2
        )

    def checkCode(self, entered_code, stored_code):
        return entered_code == stored_code

if __name__ == '__main__':
    email_instance = Email()
    userMail = input('Enter address: ')
    veCode = email_instance.generate_password()
    store = veCode
    email_instance.send_mail(userMail, veCode)

    entered_code = input('Enter the verification code received: ')
    if email_instance.checkCode(entered_code, store):
        print('Verification Successful')
    else:
        print('Verification failed')
