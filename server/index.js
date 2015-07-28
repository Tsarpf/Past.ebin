var express = require( 'express' );
var app = express();

var path = require( 'path' );
app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
} )

app.use( express.static( path.join( __dirname, '../dist' ) ) );

let i = 0;
app.get( '/recent/page/:id', ( req, res ) => {
	var id = req.params.id;
	console.log( 'got request for page ' + id );
	var arr = [
		{name: 'ses', id: i++},
		{name: 'sus', id: i++},
		{name: 'sas', id: i++}
	]
	res.json( arr );
} );

app.get( '*', express.static( path.join( __dirname, '../dist' ) ) );

var server = app.listen( 3001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log( 'Example app listening at http://%s:%s', host, port );
} );
