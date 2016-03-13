/*
	Device server for the OWG initiative.
	Written in NodeJS + Express + Sockets.io.

	@author Sergio Diaz
*/


// Requires.
var express = require('express');
var app = express();

/*
Set status route.
This dictates whether the server is running or not, more of a dev/test route.
If a sensor fails initializing this will return it.
*/
app.get('/status', function (req, res) {
	var status = {
		'server': true,
		'sensors': true,
		'success': true
	}
	// return the stringified json
  res.send(JSON.stringify(status));
});


app.listen(8080, function () {
  console.log('OWGI server running on 8080...');
});