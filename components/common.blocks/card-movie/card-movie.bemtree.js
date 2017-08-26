block('card-movie').def()( ( node, ctx ) => {
  const _movie = ctx.movie;

  if ( _movie.schedules ) {
    let discuss_link, discuss_preview;
    for (let i = _movie.schedules.length - 1; i >= 0; i--) {
      if ( _movie.schedules[i].discuss_link || _movie.schedules[i].discuss_preview ) {
        discuss_link = _movie.schedules[i].discuss_link;
        discuss_preview = _movie.schedules[i].discuss_preview;
        break;
      }
    }
    _movie.discuss_link = discuss_link;
    _movie.discuss_preview = discuss_preview;      
  }

  return applyNext();
});
