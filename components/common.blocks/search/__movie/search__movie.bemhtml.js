block('search').elem('movie')(

  match( node => !node._api.movie || !node._api.movie.length ).def()(''),

  content()( ( node, ctx ) => {
    let movies = node.mods.view === 'page'
      ? node._api.movie
      : node._api.movie.slice( 0, 3 )

      if(ctx.lang){
        node._lang = ctx.lang;
      }

      if(ctx.currency){
        node._currency = ctx.currency;
      }

    return [
      {
        elem: 'title',
        content: node._lang === 'en' ? 'Movies ' + node._api.movie.length : 'Фильмы ' + node._api.movie.length
      },
      movies.map( movie => {
        return {
          block: 'card-movie',
          mods: {
            view: node.mods.view === 'page' ? 'list' : 'text',
            theme: node.mods.view === 'page' ? 'artdoc' : 'artdoc-dark'
          },
          movie: movie,
          lang: node._lang,
          currency: node._currency
        }
      } )
    ]
  } )

)
