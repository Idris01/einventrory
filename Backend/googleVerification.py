import smtplib
import getpass
import random
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
class googleMail:
    # def __init__(self) -> None:
    #     self.verify_code = None

    # def generate_password(self):
    #     verify_code = str(random.randint(100000, 999999))
    #     return verify_code
    
    # def send_mail(self, email, vCode):
    #     message = 'Email Verification code'
    #     body = f'Your email verification code is {vCode}'

    #     credential = self.get_oauth()
    #     message2 = f'Subject: {message}\n\n{body}'
        
        # with smtplib.SMTP('smtp.gmail.com', 587) as serve:
        #     serve.starttls()
        #     serve.login(credential.token, credential.client_secret)
        #     serve.sendmail(credential.token, email, message2)

    def get_oauth(self):
        flow = InstalledAppFlow.from_client_secrets_file('client_secret_237303276167-gideg5b04tp39sbpgo9cmrvp84a19fe0.apps.googleusercontent.com.json', scopes=['https://www.googleapis.com/auth/gmail.send'])
        creds = flow.run_local_server(port=0)

        with open('token.json', 'w') as tkn:
            tkn.write(creds.to_json())
        return creds

    def checkCode(self, entered_code, stored_code):
        return entered_code == stored_code

if __name__ == '__main__':
    email_instance = googleMail()
    # userMail = input('Enter address: ')
    # veCode = email_instance.generate_password()
    # store = veCode
    email_instance.get_oauth()