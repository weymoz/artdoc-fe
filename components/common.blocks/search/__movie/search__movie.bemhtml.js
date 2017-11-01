block('search').elem('movie')(

  match( node => !node._api.movie || !node._api.movie.length ).def()(''),

  content()( node => {
    let movies = node.mods.view === 'page'
      ? node._api.movie
      : node._api.movie.slice( 0, 3 )
    return [
      {
        elem: 'title',
        content: 'Фильмы ' + node._api.movie.length
      },
      movies.map( movie => {
        return {
          block: 'card-movie',
          mods: {
            view: node.mods.view === 'page' ? 'list' : 'text',
            theme: node.mods.view === 'page' ? 'artdoc' : 'artdoc-dark'
          },
          movie: movie
        }
      } )
    ]
  } )

)