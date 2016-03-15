#!/usr/bin/python
import json
import sys

config = {}

print("What is your current country?")
country = str(raw_input("> "))
config["country"] = country
print ("Set country to %s.") % country

print("What is your current city?")
city = str(raw_input("> "))
config["city"] = city
print ("Set city to %s.") % city

print("What is your current timezone? Enter it in Unix slash-separated format. Example: Americas/Puerto_Rico")
timezone = str(raw_input("> "))
config["timezone"] = timezone
print ("Set timezone to %s.") % timezone

print("What is your current latitude/longitude? Enter it in comma separated format. You can get this by connecting to WiFi and using Google's Geolocation service on your mobile device.")
latlong = str(raw_input("> "))
config["latlong"] = latlong
print ("Set lat_long to %s.") % latlong

print ("Completed setup of server software. Is the following information correct? Y/N")
for d, v in config.iteritems():
	print("%s: %s") % (d, v)
c = raw_input("> ")
if (c == "Y" or c == "y" or c == ""):
	print("Okay, creating your config.json.")
	json = json.dumps(config)
	try:
		file = open('config.json','w')
		file.write(json)
		file.close()
	except:
	    print('Failed to create file.')
	    sys.exit(0)
	#  Soon I will implement modes...
	if len(sys.argv[1]) and sys.argv[1] == '--debug':
			print(json)
else:
	print("Ending script.")
