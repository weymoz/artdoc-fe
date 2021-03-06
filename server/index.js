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
      MemcachedStore = require('connect-memcached')(expressSession),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      // csrf = require('csurf'),
      compression = require('compression'),
      request = require('./request'),
      config = require('./config'),
      staticFolder = config.staticFolder,
      port = config.defaultPort,
      isSocket = isNaN(port),
      isDev = process.env.NODE_ENV === 'development';




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
    secret: config.sessionSecret,
    store: new MemcachedStore({
      hosts: ['127.0.0.1:11211'],
      secret: '123, easy as ABC. ABC, easy as 123' // Optionally use transparent encryption for memcache session data
    })
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(function (req, res, next) {

    req.apiRequests = []

    req.on('close', function () {
      req.apiRequests.map(function (cancel) {
        cancel.cancelSource.cancel();
        return null;
      })
    });
    next();
  })
  // .use(csrf());

// NOTE: conflicts with livereload
isDev || app.use(slashes());

passport.use( new LocalStrategy( {
    usernameField: 'username',
    passwordField: 'password'
  }, ( username, password, done ) => {

    var result = {
      credentials: {username: username, password: password}
    }

    request({
      url: '/auth/auth/login/',
      method: 'post',
      data: result.credentials
    })
      .then( api => {
        if (api.error) {
          return done( null, false, api );
        } else {
          result.cookies = api.__set_cookie;
          result.status = api.status;
          result.data   = api.user;
          return done( null, result)
        }
      })
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
