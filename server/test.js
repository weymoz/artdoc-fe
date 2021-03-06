// 'use strict';

// const config = require('./config'),
//       render = require('./render').render,
//       axios = require('axios'),
//       // { loadSchemas, normalize } = require('json-schema-normalizer');
//       { normalize, schema } = require('normalizr');

// /*
// const schemaSimple       = require('./controllers/movie/simple.schema.json'),
//       schemaMovie        = require('./controllers/movie/movie.schema.json'),
//       schemaActionPeriod = require('./controllers/movie/__action-period/movie__action-period.schema.json'),
//       schemaAuthor       = require('./controllers/movie/__author/movie__author.schema.json'),
//       schemaCover        = require('./controllers/movie/__cover/movie__cover.schema.json'),
//       schemaFest         = require('./controllers/movie/__fest/movie__fest.schema.json'),
//       schemaNomination   = require('./controllers/movie/__nomination/movie__nomination.schema.json'),
//       schemaOfflineShow  = require('./controllers/movie/__offline-show/movie__offline-show.schema.json'),
//       schemaPrice        = require('./controllers/movie/__price/movie__price.schema.json'),
//       schemaSchedule     = require('./controllers/movie/__schedule/movie__schedule.schema.json'),
//       schemaSession      = require('./controllers/movie/__session/movie__session.schema.json'),
//       schemaStudio       = require('./controllers/movie/__studio/movie__studio.schema.json');
// const schemas = loadSchemas([ simple, actionPeriod, author, cover, fest, nomination, offlineShow, price, schedule, session, studio, movie ]);
// */


// const metaSchema = new schema.Entity('meta', {}, { idAttribute: 'model' });
//   const priceSchema = new schema.Entity('price');
//   const festSchema = new schema.Entity('fest');
//   const nominationSchema = new schema.Entity('nomination');
//   const imageSchema = new schema.Entity('gallery');
//   const countrySchema = new schema.Entity('country');
//   const languageSchema = new schema.Entity('language');
//   const citySchema = new schema.Entity('city');
//   const genreSchema = new schema.Entity('genre');
//   const categorySchema = new schema.Entity('category');
//   const periodSchema = new schema.Entity('period');
//   const userSchema = new schema.Entity('user');
//   const studioSchema = new schema.Entity('studio');
//   const offlineShowSchema = new schema.Entity('offlineShow');
//   const tagSchema = new schema.Entity('tag');
//   const sessionSchema = new schema.Entity('session', { city: [citySchema], price: priceSchema }, { idAttribute: 'code' } );
//   const movieSchema = new schema.Entity('movie', {
//     price: priceSchema,
//     fests: [festSchema],
//     nominations: [nominationSchema],
//     cover: imageSchema,
//     countries: [countrySchema],
//     subs: [languageSchema],
//     language: [languageSchema],
//     actioncities: [citySchema],
//     actioncountries: [countrySchema],
//     genres: [genreSchema],
//     categories: [categorySchema],
//     actionperiods: [periodSchema],
//     authors: [userSchema],
//     studio: [studioSchema],
//     screenshots: [imageSchema],
//     schedules: [ new schema.Entity('schedule') ],
//     offlineShow: [offlineShowSchema],
//     sessions: [ { session: sessionSchema, city: [citySchema], price: priceSchema } ]
//     }, {
//     idAttribute: 'code'
//   } );
//   const scheduleSchema = new schema.Entity('schedule', { movie: [movieSchema], sessions: [sessionSchema] });
//   const authorcompilationSchema = new schema.Entity('authorcompilation', {
//     movies: [movieSchema],
//     author: [userSchema],
//     image: imageSchema
//     },{
//     idAttribute: 'code'
//   } );
//   const searchResultSchema = new schema.Object({
//     tags: [tagSchema],
//     movie: [movieSchema],
//     category: [categorySchema]
//   } );
//   const moviePlaySchema = new schema.Object({
//     movie: movieSchema,
//     session: sessionSchema,
//     schedule: new schema.Entity('schedule')
//   })

// const API = axios.create( config.host );

// // const fetch = async options => {
// //   let response;
// //   try {
// //     response = await API( options )
// //   } catch ( error ) {
// //     console.error('Request Failed:', error.config);
// //     if ( error.response ) {
// //       console.error('Status:',  error.response.status);
// //       console.error('Data:',    error.response.data);
// //       console.error('Headers:', error.response.headers);
// //     } else {
// //       console.error('Error Message:', error.message);
// //     }
// //     throw new Error( error.response || error.message )
// //   }
// //   return response.data;
// // };

// class Request {
//   constructor( url, params, schema ) {
//     this.pathname = url.replace(/\/?$/, '/');
//     this.search = Object.assign( {}, {
//       'per-page': 20,
//       page: 1,
//       sort: 'id'
//     }, params );
//     this.schema = schema;
//   }

//   get url() {
//     const params = Object.keys( this.search ).map( param => {
//       return `${ param }=${ this.search[ param ] }`;
//     } ).join('&');
//     return `${ this.pathname }/?${ params }`;
//   }

//   set url( url ) {
//     this.pathname = url;
//     return this;
//   }

//   get params() {
//     return this.search;
//   }

//   set params( params = {} ) {
//     this.search = Object.assign( {}, this.search, params );
//     return this;
//   }

//   set removeParam( param ) {
//     if ( this.search.hasOwnProperty( param ) ) {
//       delete this.search[ param ];
//     }
//     return this;
//   }

//   normalizer( response, schema ) {
//     // return response;
//     // return normalize( 'Movie', response );
//     return normalize( response, schema );
//   }

//   request( type = 'get' ) {
//     const options = {
//       method: type,
//       url: this.pathname,
//       params: this.params,
//       data: this.params
//     }
//     return fetch( options )
//       .then( response => this.normalizer( response, this.schema ) )
//       .catch( error => error );
//   }
// }

// class getMovieByFilter extends Request {
//   constructor( ...args ) {
//     super( ...args );
//     this.filter = {
//       action_city : ''
//     , action_country : ''
//     , category : ''
//     , country : ''
//     , fin_type : ''
//     , free : ''
//     , full_movie : ''
//     , genre : ''
//     , language : ''
//     , nominations : ''
//     , period : ''
//     , rating : ''
//     , studio : ''
//     , subs : ''
//     , tags : ''
//     , year : ''
//     }
//   }

//   getFilters() {
//     return this.filter;
//   }

//   setFilter( name, value ) {
//     if ( this.filter.hasOwnProperty( name ) ) {
//       if ( value ) {
//         this.filter[ name ] = this.search[ 'filter[' + name + ']' ] = value;
//       } else {
//         this.filter[ name ] = '';
//         delete this.search[ 'filter[' + name + ']' ];
//       }
//     }
//   }
// };

// module.exports = app => {
//   app.get( '/test/getCategories', async ( req, res ) => {
//     const getCategories = new Request( '/api/category', { 'per-page': 0, sort: 'code' }, { meta: metaSchema, items: [categorySchema] } );
//     const response = await getCategories.request();
//     return res.json( response )
//   } );

//   app.get( [ '/test/getAuthorCompilation', '/test/getAuthorCompilation/:code' ], async ( req, res ) => {
//     let getAuthorCompilation = new Request( '/api/authorcompilation', { sort: '-sort' }, { meta: metaSchema, items: [authorcompilationSchema] } );
//     getAuthorCompilation.params[ 'per-page' ] = 3;
//     const response = await getAuthorCompilation.request();
//     return res.json( response )
//   } );

//   app.get( '/test/getSchedule', async ( req, res ) => {
//     const getSchedule = new Request( '/api/schedule', {
//       expand: 'sessions,movie',
//       sort: 'date_gmt3',
//       date_from: ( Math.floor( ( Date.now() / 1000 ) / 3600 ) * 3600 - ( 31 * 60 * 60 ) )
//       }, {
//       meta: metaSchema,
//       items: [scheduleSchema]
//     } );
//     getSchedule.params[ 'per-page' ] = 3;
//     // getSchedule.params[ 'per-page' ] = 10;
//     const response = await getSchedule.request();
//     return res.json( response )
//   } );

//   app.get( [ '/test/getMovie', '/test/getMovieBy:key/:value' ], async ( req, res ) => {
//     let getMovie = new Request( '/api/movie', { expand: 'schedules,sessions,category,screenshots' }, { meta: metaSchema, items: [movieSchema] } );
//     if ( req.params.key && req.params.value ) {
//       getMovie.params[ req.params.key.toLowerCase() ] = req.params.value;
//     }
//     const response = await getMovie.request();
//     return res.json( response )
//   } );

//   app.get( [ '/test/getMovieByFilter', '/test/getMovieInCategory/:category', '/test/getMovieWithTag/:tag' ], async ( req, res ) => {
//     let getMovie = new getMovieByFilter( '/api/movie/filter', { expand: 'schedules,sessions,category,screenshots' }, { meta: metaSchema, items: [movieSchema] } );
//     getMovie.params.sort = '-rating';
//     getMovie.setFilter( 'category', req.params.category );
//     getMovie.setFilter( 'tags', req.params.tag );
//     Object.keys( req.query ).forEach( filterName => {
//       getMovie.setFilter( filterName, req.query[ filterName ] );
//     } )
//     const response = await getMovie.request();
//     return res.json( response )
//   } );

//   app.get( '/test/getSearch/:q', async ( req, res ) => {
//     let getSearch = new Request( '/search/search', {}, { items: searchResultSchema } );
//     getSearch.params.q = req.params.q.toLowerCase();
//     return res.json( await getSearch.request() )
//   } );

//   app.get( '/test/getMovieViewFree/:code', async ( req, res ) => {
//     let getMovieViewFree = new Request( '/ondemand/release', {}, moviePlaySchema );
//     getMovieViewFree.params.movie_code = req.params.code;
//     return res.json( await getMovieViewFree.request() )
//   } );

//   app.get( '/test/getMovieViewPaid/', async ( req, res ) => {
//     let getMovieViewPaid = new Request( '/cinema/release', {
//       id: 573,
//       hash: '051284600ff79cda8e25aa101f7aa683',
//       sess_id: 526
//     }, moviePlaySchema );
//     return res.json( await getMovieViewPaid.request() )
//   } );

// }
