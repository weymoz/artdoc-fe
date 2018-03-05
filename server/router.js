const config = require('./config'),
      render = require('./render').render,
      axios = require('axios'),
      passport = require('passport'),
      request = require('./request'),
      {URL}  = require('url');

//const isCallerMobile = req => {
//  let ua = req.headers['user-agent'].toLowerCase(),
//      isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(ua.substr(0, 4));
//
//  return !!isMobile;
//};

module.exports = app => {

  app.get('/livereload.js', (req, res) => {
    res.end('ok');
  });

  // Expand
  let global = Object.assign({}, config.site);
  global.categoryByCode = {};

  // Promo
  app.use( (req, res, next) => {
    // Check if `req.query.promo` contains in promo's list;
    const actions = config.promo.filter( promo => req.query.promo === promo.name );
    actions.forEach( promo => {
      Object.keys( promo.cookies ).forEach( action => {
        let newCookie = promo.cookies[ action ],
            params = {};
        Object.keys( newCookie ).forEach( key => {
          switch ( key ) {
            case 'value':
              break;
            case 'expire':
              params.expire = ( new Date( newCookie.expire * 1000 ).toUTCString() );
              break;
            default:
              params[ key ] = newCookie[ key ];
              break;
          }
        } );
        if ( req.cookies[ action ] !== newCookie.value ) {
          res.cookie( action, newCookie.value, params );
          req.cookies[ action ] = newCookie.value
        }
      } )
    } );

    next();
  } );

  app.use( ( req, res, next ) => {

    req.globalData = Object.assign({}, global);

    if (req.isAuthenticated()) {
      request({
        url: '/auth/',
        clientRequest: req
      }).then( (response) => {
        console.log(response);
        console.log('test');
        if (response.status == 'authorized') {
          req.session.userExtra = response;
          req.globalData = Object.assign({ user: {
            extra: response
            } }, req.globalData);
        } else {
          delete req.session.userExtra;
          //req.logOut();
        }
        next();
      }).catch( error => {
        console.log( error );
        next();
      } );
    } else {
      //req.globalData.user = {};
      next();
    }


  } );

  // iFrame widget
  app.use( ( req, res, next ) => {
    const refer = new URL( req.headers.referrer || req.headers.referer || req.protocol + '://' + req.get( 'host' ) + req.originalUrl );
    req.globalData.refer = refer.host !== req.get('host');
    req.globalData.bundle = !req.query.embed ? 'desktop' : 'widget';
    next();
  } );

  request( { url: '/api/category/?per-page=0'} ).then( response => {
    global.category = response.items.sort(function (a,b) {
      return a.name.localeCompare(b.name, 'ru');
    });

    for ( let i = global.category.length - 1; i >= 0; i-- ) {
      global.categoryByCode[ global.category[i].code ] = global.category[i];
    }
  }).catch( () => { console.log( 'Fail for get categories' ) } );

  /*
   *  Routing
   *
   ***************************/

  // Index
  app.get( '/', ( req, res ) => {
    axios.all([
      request( { url: '/api/authorcompilation/?sort=-sort&per-page=3&page=1' } ),
      request( { url: '/api/schedule/?expand=sessions,movie&per-page=4&unique=1&date_from=' + (Math.floor((Date.now() / 1000) /3600 ) * 3600 - (31 * 60 * 60)) } ),
      request( { url: '/api/news/?per-page=4&page=1&sort=-sort' } )
    ]).then( (response) => {
      let data = Object.assign({}, req.globalData, { api: response[0].items }, { poster: response[ 1 ] }, { news: response[ 2 ].items } );
      data.page = 'index';
      data.adaptive = true;
      return render( req, res, data );
    }).catch( error => res.send( error ) );
  });

  // About
  app.get( '/about', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    data.page = 'about';
    return render( req, res, data );
  });

  app.get( '/terms', function(req, res) {
    let data = Object.assign({}, req.globalData);
    data.page = 'terms';
    return render( req, res, data );
  });

  // Club
  app.get( '/club', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    data.page = 'club';
    return render( req, res, data );
  });

  // Catalog
  app.get( [ '/movie/category-:category', '/movie/tag-:tag', '/movie' ], ( req, res ) => {
    let req_url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
    let data = Object.assign({}, req.globalData);
    let filter = Object.assign({}, req.query);
    data.page = 'movies';
    data.adaptive = true;
    data.currentCategoryCode = 'all';
    data.title = req.params.category ? data.categoryByCode[ req.params.category ].name : 'Все фильмы';
    data.pagination = {
      'per-page' : 20,
      page: req.query.page || 1,
      params: req_url.searchParams
    };

    let sortBy = req.query.sort || '-rating';
    let url = '/api/movie/filter/?per-page=20&sort=' + sortBy + '&';
    if (typeof req.params.category !== 'undefined') {
      filter['category'] = [data.categoryByCode[ req.params.category ].id];
      data.currentCategoryCode = data.categoryByCode[ req.params.category ].code;
    }
    if (typeof req.params.tag !== 'undefined') {
      filter['tags'] = [encodeURIComponent(req.params.tag)];
    }
    Object.keys(filter).map(function (key) {
      url += encodeURIComponent('filter['+key+']')+'=' + filter[key] + '&';
      return filter[key];
    })
    url += '&per-page=' + data.pagination['per-page'] + '&page=' + data.pagination.page;
    axios.all([
      request({
        clientRequest: req,
        url: url,
      }),
      request({
        clientRequest: req,
        url: '/api/movie/filtervalues/',
      })
    ]).then( (response) => {

      console.log(response);
      data.api = response[0].items;
      data.filters = response[1];
      data.filter = filter;
      data.pagination = Object.assign(response[0].meta, data.pagination);
      data.pagination.sort = req.query.sort || '-rating';
      data.pagination.view = req.query.view || 'grid';
      data.page = 'movies';

      console.log(data);
      return render( req, res, data );
    } ).catch( error => res.send( error ) );
  });

  app.get('/movie/:name/buy', function (req, res, next) {
    let data = Object.assign({}, req.globalData);
    data.page = 'order';
    data.page.isCinema = false;

    request({
      clientRequest: req,
      url: '/api/movie/?sort=id&expand=schedules,sessions,category,screenshots&code=' + encodeURIComponent(req.params.name)
    })
      .then( response => {

        if (!response.items[0]) {
          next();
          return true;
        }
        data.api = {
          movie: response.items[0],
          type: 'rent',
          time_gmt3: Math.ceil((((new Date()))/1000 + 60*60*24*3)/60/60)*60*60,
        }


        data.title = response.items[0].name;
        data.meta.og.image = response.items[0].cover && response.items[0].cover.id
          ? '//artdoc.media/upload/resize/' + response.items[0].cover.id + '/640x360.jpg'
          : data.meta.og.image;
        render( req, res, data );
      } )
      .catch(( error ) => {
        console.log('error!!!');
        res.send( error );
      } );

  })

  // Movie
  app.get( '/movie/:name', ( req, res, next ) => {
    let data = Object.assign({}, req.globalData);

    // Check promo
    data.promo = {};
    config.promo.forEach( promo => {
      data.promo[ promo.name ] = Object.keys( promo.cookies ).every( key => {
          return promo.cookies[ key ].value == req.cookies[ key ];
        } )
        ? promo.data
        : false
    } );

    if ( req.query.hasOwnProperty( 'code' ) ) {
      data.page = 'order';
      data.isCinema = true;
      request({
        url: '/api/session/?expand=movie,category,city&code=' + encodeURIComponent(req.query.code),
        clientRequest: req
      })
        .then( response => {
          if (!response.items.length) {
            next();
          }
          data.api = response.items[0];
          data.api.type = 'cinema';
          data.title = response.items[0].name;
          data.api.tz = req.query.tz;
          data.api.checked_city = req.query.city;
          return render( req, res, data );
        } )
        .catch(( error ) => res.send( error ) );
    } else {
      data.page = 'movie';
      request({
        url: '/api/movie/?sort=id&expand=schedules,sessions,category,screenshots&code=' + encodeURIComponent(req.params.name),
        clientRequest: req
      })
        .then( response => {
          if (!response.items.length) {
            console.log('next!');
            next();
          }
          data.api = response.items[0];
          data.title = response.items[0].name;
          data.adaptive = true;
          data.meta.og.image = response.items[0].cover && response.items[0].cover.id
            ? '//artdoc.media/upload/resize/' + response.items[0].cover.id + '/640x360.jpg'
            : data.meta.og.image;
          return render( req, res, data );
        } )
        .catch( ( error ) => res.send( error ) );
    }
  });

  // Collections
  app.get( '/selection', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    data.pagination = {
      'per-page' : 20,
      'page': req.query.page ? req.query.page : 1
    };
    let url = '/api/authorcompilation/';
    url += '?sort=-sort&per-page=' + data.pagination['per-page'] + '&page=' + data.pagination.page;
    data.page = 'selections';
    data.adaptive = true;
    data.title = 'Авторские подборки';
    request({
      clientRequest: req,
      url: url
    })
        .then( response => {
          data.api = response.items;
          return render( req, res, data );
        }).catch( error => res.send( error ) );
  });

  // Collection
  app.get( '/selection/:code', ( req, res, next ) => {
    let data = Object.assign({}, req.globalData);
    data.pagination = {
      'per-page' : 20,
      'page': req.query.page ? req.query.page : 1
    };
    let url = '/api/authorcompilation/?code=' + encodeURIComponent(req.params.code);
    data.page = 'selection';
    data.adaptive = true;
    request({
      clientRequest: req,
      url: url
    })
      .then( response => {
        if (!response.items.length) {
          console.log('next!');
          next();
        }
        data.api = response.items[0];
        data.title = response.items[0].name;
        return render( req, res, data );
      }).catch( error => res.send( error ) );
  });


  app.get( '/author/:id', ( req, res, next ) => {
    let data = Object.assign({}, req.globalData);
    data.pagination = {
      'per-page' : 20,
      'page': req.query.page ? req.query.page : 1
    };
    let url = '/api/author/?id=' + req.params.id
    data.page = 'author';
    data.adaptive = true;
    request({
      clientRequest: req,
      url: url
    })
      .then( response => {
        if (!response.items.length) {
          console.log('next!');
          next();
        }
        data.api = response.items[0];
        data.title = response.items[0].name;
        return render( req, res, data );
      }).catch( error => res.send( error ) );
  });


  // Cinema's catalog
  app.get( '/cinema', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    data.page = 'schedule';
    data.title = 'Расписание онлайн-киносеансов';
    request({
      clientRequest: req,
      url: '/api/schedule/?expand=sessions,movie&sort=date_gmt3&per-page=100&date_from=' + (Math.floor((Date.now() / 1000) / 3600) * 3600 - (31 * 60 * 60))
    })
      .then( response => {
        data.api = response.items;
        return render( req, res, data );
      } )
      .catch( error => res.send( error ) );
  });

  // Cinema's play or discuss
  app.get( /cinema\/(release|discuss)/, ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    if ( req.query.hasOwnProperty( 'hash' ) && req.query.hasOwnProperty( 'sess_id' ) && req.query.hasOwnProperty( 'id' ) ) {
      data.page = req.params[0] === 'discuss' ? 'discuss' : 'play';
      request({
        clientRequest: req,
        url: '/cinema/release/?id=' + req.query.id + '&hash=' + req.query.hash + '&sess_id=' + req.query.sess_id
      })
        .then( response => {
          data.api = response;
          data.api.type = 'cinema';

          if (req.params[0] === 'discuss') {
            if (typeof response.schedule !== 'undefined') {
              if (response.schedule.discuss_link) {
                return res.redirect(response.schedule.discuss_link);
              } else if (response.schedule.discuss_preview) {
                return render( req, res, data );
              }
            }
            return render(req, res, { view: '404', page: 'index' });
          }
          return render( req, res, data );
        } )
        .catch( error => res.send( error ) );
    }
  });

  // Order
  app.get( '/order/:transaction_id', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    request( {
      url: '/payment/provide/',
      method: 'post',
      clientRequest: req,
      data: { nonce: req.query.payment_nonce, transaction_id: req.params.transaction_id }
    })
      .then( response => {
        data.api = response;
        data.page = 'thanks';
        data.title = 'Билет успешно оплачен';

        if ( data.api.error ) {
          data.page = 'error';
          data.title = 'payment-error'; // 'При оплате произошла ошибка'
        }
        return render( req, res, data );
      } )
      .catch( error => res.send(error) );
  });

  // Promo activate
  app.get( '/payment/freeactivate/', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    request({
      clientRequest: req,
      url: '/payment/freeactivate/?' + Object.keys(req.query).map(key => key + '=' + encodeURIComponent(req.query[key])).join('&')
    })
      .then( response => {
        data.api = response;

        if ( !data.api.error ) {
          data.page = 'thanks';
          data.title = 'Билет успешно активирован';
          render( req, res, data );
        } else {
          data.page = 'error';
          data.title = 'При активации произошла ошибка';
          return render( req, res, data );
        }

      } )
      .catch(() => res.send('error') );
  });

  // Free movie
  app.get( '/movie/:name/watch', ( req, res ) => {
    let data = Object.assign({}, req.globalData);

    if (req.query.hash) {
      data.page = 'play';
      request({
        clientRequest: req,
        url: '/cinema/release/rent/?id=' + req.query.id + '&hash=' + req.query.hash
      })
        .then( response => {

          data.api = response;
          data.api.type = 'rent';
          return render( req, res, data );
        } )
        .catch(() => {
          return res.send('error')
        } );

    } else {

      request({
        url: '/api/movie/?sort=id&expand=schedules,sessions,category,video_link,screenshots&code=' + encodeURIComponent(req.params.name),
        clientRequest: req
      })
        .then( response => {

          data.api = {};
          data.api.type = 'rent';
          data.api.movie = response.items[0];
          data.api.link = response.items[0].video_link;
          data.title = response.items[0].name;
          data.page = 'play';
          data.meta.og.image = response.items[0].cover && response.items[0].cover.id
            ? '//artdoc.media/upload/resize/' + response.items[0].cover.id + '/640x360.jpg'
            : data.meta.og.image;
          return render( req, res, data );
        } )
        .catch( ( error ) => res.send( error ) );
    }
  });

  // Search
  app.get( '/search', ( req, res ) => {
    let data = Object.assign({}, req.globalData);
    request({
      clientRequest: req,
      url: '/search/search/?per-page=20&q=' + encodeURIComponent(req.query.q)
    })
      .then( response => {
        data.api = response;
        data.page = 'search';
        data.title = 'Результаты поиска';
        data.search = req.query.q;
        if ( !data.api.error ) {
          return render( req, res, data );
        }
      } )
      .catch( error => res.send( error ) );
  });

  /*
   *  API Proxy
   *
   ***************************/

  app.post( '/api/order/:session_id', ( req, res ) => {

    let promo_code = '';

    // Check promo
    let promoCode = {};
    config.promo.forEach( promo => {
      promoCode[ promo.name ] = Object.keys( promo.cookies ).every( key => {
          return promo.cookies[ key ].value == req.cookies[ key ];
        } )
        ? promo.data
        : false
    } );

    if ( promoCode.meduza ) {
      promo_code = 'artdocmedia_free';
    }

    request( {
      url: '/cinema/booking/booking/?promo=' + promo_code,
      method: 'post',
      clientRequest: req,
      data: {
        CinemaTicketModel: { email: req.body.email },
        session_id: req.params.session_id,
        promo: promo_code
      }
    }).then( api => {
      if ( api.payment_url ) {
        request({
          clientRequest: req,
          url: api.payment_url
        }).then( response => {
          return res.json( response )
        }).catch(() => res.send('error') );
      } else {
        return res.json( api );
      }
    }).catch( error => res.send( error ) );
  });

  app.post( '/api/buy/:movie_id', ( req, res ) => {

    request({
      url: '/cinema/booking/rent/',
      method: 'post',
      clientRequest: req,
      data: {
        RentTicketModel: { email: req.body.email },
        movie_id: req.params.movie_id
      }
    }).then( api => {
      if ( api.payment_url ) {
        request({
          clientRequest: req,
          url: api.payment_url
        })
          .then( response => {
            res.json(  response );
          } )
          .catch(() => res.send('error') );
      } else {
        res.json( api );
      }
    })
      .catch((e) => {
        console.log(e);
        return res.send('error')
      } );
  });

  app.post( '/api/payment/:transaction_id', ( req, res ) => {
    request( {
      url: '/payment/provide/',
      method: 'post',
      clientRequest: req,
      data: { nonce: req.body.payment_nonce, transaction_id: req.params.transaction_id}
    })
      .then( api => res.json( api ) )
      .catch( error => res.send( error ) );
  });

  app.get( '/api/filter/', ( req, res ) => {
    const sort = req.query.sort || '-rating';
    const page = req.query.page || 1;
    const filters = Object.keys( req.query.filters ).map( filter => req.query.filters[ filter ] ? 'filter[' + filter + ']=' + req.query.filters[ filter ] : '' ).join('&');
    request({
      clientRequest: req,
      url: '/api/movie/filter/?per-page=20&sort=' + sort + '&page=' + page + '&' + filters
    })
      .then( api => res.json( api ) )
      .catch(  error => res.send( error ) )
  });

  app.get( '/api/search', ( req, res ) => {
    if ( req.query.q ) {

      let axiosParams = {
        url: '/search/search/?per-page=20&q=' + encodeURIComponent(req.query.q),
        clientRequest: req
      };

      request( axiosParams )
        .then( api => res.json( api ) )
        .catch( error => res.send( error ) );
      req.apiRequests.push(axiosParams);
    } else {
      return res.json( { api: { error: 'Empty data' } } )
    }
  });

  app.post( '/api/user/login', ( req, res, next ) => {
    passport.authenticate( 'local', ( err, user, info ) => {
      return err
        ? next( err )
        : user
          ? req.logIn( user, fail => {
              return fail
                ? next( fail )
                : res.json( user )
            } )
          : res.json( info )
    } )(req, res, next);
  });

  app.get( '/logout', ( req, res ) => {
    req.logOut();
    res.redirect( 303, '/' );

  } )


  app.get( '/test/', ( req, res ) => {
    request( {
        url: '/auth/auth/',
        clientRequest: req,
      } )
      .then( api => res.json( api ) )
      .catch( error => res.send( error ) )
  } )

  /*
   * Misc.
   *
   ****************************/

  // require('./test')( app );

  app.get('*', (req, res) => {
    let data = Object.assign({}, req.globalData);
    data.page = 'index';
    data.view = '404';
    data.title = 'Ошибка 404 – страница не найдена';
    res.status( 404 );
    return render(req, res, data);
  });
};
