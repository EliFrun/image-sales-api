import requests

body = {}

response = requests.delete("http://localhost:8080/product/12")

print(response.status_code)

print(response.content)



