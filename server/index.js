var express = require( 'express' );
var app = express();

var path = require( 'path' );
app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
} )

app.use( express.static(path.join(__dirname, '../')));

app.get( '/recent/page/:id', ( req, res ) => {
	var id = req.params.id;
	console.log( 'got request for page ' + id );
	var arr = [
		'ses ' + id,
		'sus ' + id + 1,
		'sas ' + id + 2
	]
	console.log( arr );
	res.json( arr );
	res.end();
} );

app.get( '/', function( req, res ) {
	console.log( 'got request for root' );
	res.send( 'Hello World!' );
} );

var server = app.listen( 3001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log( 'Example app listening at http://%s:%s', host, port );
} );
