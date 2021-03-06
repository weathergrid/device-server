/*
Device server for the OWG initiative.
Written in NodeJS + Express + Sockets.io.

@author Sergio Diaz
*/


// Requires.
var express = require('express');
var app = express();

/**
 * Server and sensor status probe. 
 * @return {string} [JSON containing status information]  
 */

app.get('/status', function (req, res) {
	var status = {
		server: true,
		sensors: true,
		success: true
	}
	// return the stringified json
  res.send(JSON.stringify(status));
});

/**
 * Returns current information from sensors in JSON format.
 * A preffered method to access current data is using sockets for each
 * sensor, but sometimes in the frontend this is needed.
 * 
 * @return {string} [JSON containing current information]
 */
app.get('/now', function(req, res) {
	var sensor_data = {
		temperature_f: 20,
		temperature_c: 20,
		humidity: 10,
		pressure: 10,
		time: Date.now(),
		success: true
	};

	// return the json
	res.send(JSON.stringify(sensor_data));
});

/**
 * Returns raw sensor data.
 * @return {string} [JSON containing sensor data.]
 */
app.get('/sensors/:sensor', function(req, res) {
	var sensor = req.params.sensor;
	switch (sensor) {
		case 'temperature':
			data = 20;
			break;
		case 'humidity':
			data = 10;
			break;
		case 'pressure':
			data = 10;
			break;
	}

	sensor_data = {
		data: data,
		time: Date.now(),
		success: true
	}

	// return the json
	res.send(JSON.stringify(sensor_data));
});

/**
 * Returns current sensor location.
 * @return {string} [JSON containing sensor data.]
 */
app.get('/location', function(req, res) {
	// TODO
	res.send("latlong");
});


app.listen(8080, function () {
  console.log('OWGI server running on 8080...');
});
