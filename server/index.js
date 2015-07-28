import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

var app = express();

app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
} )

app.use( bodyParser.json() );

app.use( express.static( path.join( __dirname, '../dist' ) ) );

let posts = [];
app.get( '/recent/page/:id', ( req, res ) => {
	var id = parseInt( req.params.id );

	var arr = [];
	for ( var i = 0; i < posts.length; i++ ) {
		arr.push( getPaste( i ) );
	}

	res.json( arr );
} );

function getPaste( id ) {
	var obj = {
		id: id,
		content: posts[ id ].content,
		name: posts[ id ].name,
	}
	return obj;
}

app.get( '/paste/:id', ( req, res ) => {
	var id = parseInt( req.params.id );
	res.json( getPaste( id ) );
} );

var postStatuses = require( '../js/constants/NewPasteAttempt' );
var id = 0;
app.post( '/new', ( req, res ) => {
	res.send( JSON.stringify( {
		id: id,
		state: postStatuses.SUCCEEDED
	} ) );
	var content = req.body.content ? req.body.content : 'no content';
	var name = content.substring( 0, 10 );
	posts.push( {
		content, name
	} );
	res.end();
	id++;
} );

app.get( '*', express.static( path.join( __dirname, '../dist' ) ) );

var server = app.listen( 3001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log( 'Example app listening at http://%s:%s', host, port );
} );
