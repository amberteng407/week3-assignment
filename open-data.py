import urllib.request as request
import json
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with request.urlopen(src) as response:
    data=json.load(response) 

clist=data["result"]["results"]
with open("data.txt", "w", encoding="utf-8") as file:
    for link in clist:
        url="http"+link["file"].split("http")[1]
        file.write(link["stitle"]+","+link["longitude"]+","+link["latitude"]+","+url+"\n")
