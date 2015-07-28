var mongoose = require( 'mongoose' );
var pasteSchema = mongoose.Schema( {
	content: String,
	name: String
} );

export default mongoose.model( 'Paste', pasteSchema );

