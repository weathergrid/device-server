# device-server
  Device server written in Node.
Handles live data emission and JSON...

## setup
To set up the server, either:

1.  Use the Makefile, which takes care of device bringup for you, in just one command *(recommended)*
2.  Use setup.py directly (not recommended, only for dev)

If utilizing the second method, simply run 

	python setup.py [--debug, --options]

to create your config.json.

## todo
- [ ] JSON
- [ ] Sockets
- [ ] GPIO Sensor integration
- [ ] Code touchups and cleanups
