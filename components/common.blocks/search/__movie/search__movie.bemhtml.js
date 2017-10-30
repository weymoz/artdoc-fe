block('search').elem('movie')(

  match( node => !node._api.movie ).def()(''),

  content()( node => {
    return node._api.movie && node._api.movie.length
      ? [
          {
            elem: 'title',
            content: 'Фильмы ' + node._api.movie.length
          },
          node._api.movie.map( movie => {
            return {
              block: 'card-movie',
              mods: { view: 'list' },
              movie: movie
            }
          } )
        ]
      : ''
  } )

)