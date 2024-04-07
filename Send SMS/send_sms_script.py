from dotenv import load_dotenv
import requests
import os
import sys
import json

load_dotenv()

message = sys.argv[1] if len(sys.argv) > 1 else 'Hello from DATCH'
phone = sys.argv[2] if len(sys.argv) > 1 else '078XXXXXXX'

username = os.getenv('USER_NAME')
password = os.getenv('PASSWORD')
sender = os.getenv('SENDER')

data = {
    'recipients': phone,
    'message': message,
    'sender': sender
}

r = requests.post(
    'https://www.intouchsms.co.rw/api/sendsms/.json',
    data=data,
    auth=(username, password)
)

response_json = json.dumps(r.json())

print(response_json, r.status_code)