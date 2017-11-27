const fs = require('fs'),
      path = require('path'),
      express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      favicon = require('serve-favicon'),
      morgan = require('morgan'),
      serveStatic = require('serve-static'),
      cookieParser = require('cookie-parser'),
      expressSession = require('express-session'),
      slashes = require('connect-slashes'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      axios = require('axios'),
      // csrf = require('csurf'),
      compression = require('compression'),

      config = require('./config'),
      staticFolder = config.staticFolder,
      client = axios.create( config.host ),

      Render = require('./render'),
      render = Render.render,
      dropCache = Render.dropCache, // eslint-disable-line no-unused-vars

      port = config.defaultPort,
      isSocket = isNaN(port),
      isDev = process.env.NODE_ENV === 'development';

require('debug-http')();

app
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(compression())
  .use(favicon(path.join(staticFolder, 'favicon.ico')))
  .use(serveStatic(staticFolder))
  .use(morgan('tiny'))
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

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function( username, password, done ) {
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

passport.serializeUser(function(user, done) {
  done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
  done(null, JSON.parse(user));
});

require('./router')(app);

app.get('/ping/', function(req, res) {
  res.send('ok');
});

isDev && require('./rebuild')(app);

app.get('*', function(req, res) {
  res.status(404);
  return render(req, res, { view: '404', page: 'index', title: '404' });
});

if (isDev) {
  app.get('/error/', function() {
    throw new Error('Uncaught exception from /error');
  });

  app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
  isSocket && fs.chmod(port, '0777');
  console.log('Server is listening on', this.address().port);
});
