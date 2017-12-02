var marked = require('marked');

block('card-movie')(
  match( ( node, ctx ) => !ctx.movie ).def()(''),

  match( ( node, ctx ) => ctx.movie ).def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    /*
     * Normalization
     */
    if (_movie.description) {
      _movie.description = marked( _movie.description );
    }


    if ( _movie.offlineShow && _movie.offlineShow.description ) {
      _movie.offlineShow.description = marked( _movie.offlineShow.description );
    }

    // If shedule has discussion data or premiere, move first concurrence to movie's object
    if ( _movie.schedules ) {
      let discuss_link, discuss_preview, premiere;

      // Check discussion
      for (let i = 0; i < _movie.schedules.length; i++) {
        if ( _movie.schedules[i].discuss_link || _movie.schedules[i].discuss_preview ) {
          discuss_link = _movie.schedules[i].discuss_link;
          discuss_preview = _movie.schedules[i].discuss_preview;
          break;
        }
      }

      if (discuss_preview) {
        discuss_preview = discuss_preview.replace('Пройдите по ссылке.', '');
      }

      _movie.discuss_link = discuss_link;
      _movie.discuss_preview = discuss_preview;

      // Check premiere
      for (let i = 0; i < _movie.schedules.length; i++) {
        if ( _movie.schedules[i].premiere ) {
          premiere = _movie.schedules[i].premiere;
          break;
        }
      }
      _movie.premiere = premiere;
    }

    return applyNext();
  })
)
