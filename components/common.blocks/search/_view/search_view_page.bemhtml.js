block('search').mod('view', 'page')(
  content()( () => {
    return [ 'movie', 'tag' ].map( elem => {
      return {
        elem: elem
      }
    } )
  } )
)