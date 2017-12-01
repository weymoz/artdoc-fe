const fs = require('fs'),
      path = require('path'),
      app = require('express')(),
      bodyParser = require('body-parser'),
      favicon = require('serve-favicon'),
      morgan = require('morgan'),
      serveStatic = require('serve-static'),
      cookieParser = require('cookie-parser'),
      expressSession = require('express-session'),
      slashes = require('connect-slashes'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      // csrf = require('csurf'),
      compression = require('compression'),

      config = require('./config'),
      staticFolder = config.staticFolder,
      port = config.defaultPort,
      isSocket = isNaN(port),
      isDev = process.env.NODE_ENV === 'development',

      axios = require('axios'),
      client = axios.create( config.host );

!isDev || require('debug-http')();

app
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(compression())
  .use(favicon(path.join(staticFolder, 'favicon.ico')))
  .use(serveStatic(staticFolder))

!isDev || app.use(morgan('tiny'))

app
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: config.sessionSecret
  }))
  .use(passport.initialize())
  .use(passport.session())
  // .use(csrf());

// NOTE: conflicts with livereload
isDev || app.use(slashes());

passport.use( new LocalStrategy( {
    usernameField: 'username',
    passwordField: 'password'
  }, ( username, password, done ) => {
    client.post( '/auth/auth/login/', { username: username, password: password } )
      .then( api => {
        return api.data.error
          ? done( null, false, api.data )
          : done( null, {
              status: api.data.status,
              cookies: api.headers['set-cookie']
            } )
      } )
      .catch( () => console.log('Passport error') )
}));

passport.serializeUser( ( user, done ) => {
  done( null, JSON.stringify( user ) );
});

passport.deserializeUser( ( user, done ) => {
  done( null, JSON.parse( user ) );
});

require( './router' )( app );

isDev && require( './rebuild' )( app );

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
  isSocket && fs.chmod(port, '0777');
  console.log('Server is listening on', this.address().port);
});
