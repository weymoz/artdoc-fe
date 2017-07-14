var render = require('./render').render;
module.exports = function( app ) {

  app.get( [ '/', '/index' ], function( req, res ) {
    render( req, res, { bundle: 'index' } )
  });

  app.get( '/catalog', function( req, res ) {
    render( req, res, { bundle: 'catalog' } )
  });

  app.get( '/catalog/:id', function( req, res ) {
    render( req, res, { bundle: 'film' } )
  });

}