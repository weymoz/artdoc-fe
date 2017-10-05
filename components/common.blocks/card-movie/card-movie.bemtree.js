block('card-movie').def()( ( node, ctx ) => {
  const _movie = ctx.movie;

  /*
   * Normalization
   */

  _movie.cover = _movie.cover || {};

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
});
