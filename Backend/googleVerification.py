from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

class googleMail:
    def __init__(self):
        pass
    """Gets the google authorization of the email address"""
    def get_oauth(self):
        flow = InstalledAppFlow.from_client_secrets_file('client_secret_237303276167-gideg5b04tp39sbpgo9cmrvp84a19fe0.apps.googleusercontent.com.json', scopes=['https://www.googleapis.com/auth/gmail.send'])
        creds = flow.run_local_server(port=0)

        with open('token.json', 'w') as tkn:
            tkn.write(creds.to_json())
        return creds
    
if __name__ == '__main__':
    email_instance = googleMail()
    email_instance.get_oauth()