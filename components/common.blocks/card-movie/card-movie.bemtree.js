block('card-movie').def()( ( node, ctx ) => {
  const _movie = ctx.movie;

  /*
   * Normalization
   */

  // If shedule has discussion data or premiere, move first concurrence to movie's object
  if ( _movie.schedules ) {
    let discuss_link, discuss_preview, premiere;
    
    // Check discussion
    for (let i = _movie.schedules.length - 1; i >= 0; i--) {
      if ( _movie.schedules[i].discuss_link || _movie.schedules[i].discuss_preview ) {
        discuss_link = _movie.schedules[i].discuss_link;
        discuss_preview = _movie.schedules[i].discuss_preview;
        break;
      }
    }
    _movie.discuss_link = discuss_link;
    _movie.discuss_preview = discuss_preview;

    // Check premiere
    for (let i = _movie.schedules.length - 1; i >= 0; i--) {
      if ( _movie.schedules[i].premiere ) {
        premiere = _movie.schedules[i].premiere;
        break;
      }
    }
    _movie.premiere = premiere;
  }

  return applyNext();
});
