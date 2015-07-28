import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Paste from './paste.schema';

import mongoose from 'mongoose';
mongoose.connect( 'mongodb://localhost/test' );
var db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', function( callback ) {

} );


var app = express();

app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
} )

app.use( bodyParser.text( {
	limit: '1mb'
} ) );

app.use( express.static( path.join( __dirname, '../dist' ) ) );

let posts = [];
app.get( '/recent/page/:id', ( req, res ) => {
	var id = parseInt( req.params.id );
	Paste.find().limit( 20 ).exec( ( err, docs ) => {
		if ( !err ) {
			res.json( docs );
		} else {
			console.log( err );
		}
	} );
} );

function getPaste( id, callback ) {
	Paste.findById( id, ( err, doc ) => {
		if ( !err ) {
			callback( doc );
		} else {
			console.log( err );
		}
	} );
}

app.get( '/get/paste/:id', ( req, res ) => {
	var id = req.params.id;
	getPaste( id, ( paste ) => {
		res.json( paste );
	} );
} );

var postStatuses = require( '../js/constants/NewPasteAttempt' );
var id = 0;
app.post( '/new', ( req, res ) => {
	var content = req.body ? req.body : 'no content';
	var name = content.substring( 0, 10 );
	var paste = new Paste( {
		content, name
	} );

	paste.save( ( err, doc ) => {
		if ( err ) {
			console.log( 'error' );
			console.log( err );
			res.send( JSON.stringify( {
				state: postStatuses.FAILED
			} ) );
		} else {
			res.send( JSON.stringify( {
				id: doc._id,
				state: postStatuses.SUCCEEDED
			} ) );
		}
		res.end();
	} );
} );

app.use( '*', express.static( path.join( __dirname, '../dist' ) ) );
//app.get( '/paste/:id', express.static( path.join( __dirname, '../dist' ) ) );

var server = app.listen( 3001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log( 'Example app listening at http://%s:%s', host, port );
} );
