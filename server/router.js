const render = require('./render').render,
  axios = require('axios');

const client = axios.create({
  baseURL: 'http://artdoc.breadhead.ru/api/',
  // timeout: 250
});

const request = options => {
  const onSuccess = response => {
    return response.data;
  }

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
}

module.exports = function( app ) {

  app.get( '/', function( req, res ) {
    render( req, res, { bundle: 'index' } )
  });

  app.get( '/schedule', function( req, res ) {
    render( req, res, { bundle: 'schedule' } )
  });

  app.get( [ '/movie/:id', '/movie/:id/:date' ], ( req, res ) => {
    request( { url: 'movie/' + req.params.id } )
      .then(response => render( req, res, { bundle: 'movie', api: response } ) )
      .catch(mock => render( req, res, { bundle: 'movie', api: null } ) );
  });

}