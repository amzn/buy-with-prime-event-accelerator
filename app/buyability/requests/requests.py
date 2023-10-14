import json
import urllib.request

class Requests():
    def __init__(self, request):
        self.request = request
        
        
    def urllib_request(self):
        try:
            with urllib.request.urlopen(self.request) as response:
                response_data = response.read()
                response_text = response_data.decode('utf-8')
                # If the request is successful, create a json file and call write_item function. 
                if response.status != 200 or 'errors' in str(response_data):
                    print("response", response.status, response_text)
                    print("Please check the errors.")
                else:
                    print("Request success.")
                return json.loads(response_text)
        except urllib.error.URLError as e:
            print("HTTP error:", e)
            return None