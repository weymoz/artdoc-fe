block( 'card-selection' ).elem( 'counter' )(
  match( function () { return !this._name } ).def()(''),
  addMix()({ block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } }),
  match( node => node._movies && node._movies.length ).content()( node => {

    return [
      {
        elem: 'counter-number',
        content: node._movies.length
      },
      {
        elem: 'counter-label',
        content: {
          block: 'text',
          mods: { plural: true },
          content: {
            number: node._movies.length,
            one:  node._lang === 'en' ? 'movie' : 'фильм',
            two:  node._lang === 'en' ? 'movies' : 'фильма',
            five: node._lang === 'en' ? 'movies' : 'фильмов'
          }
        }
      }
    ]
  } )
);
