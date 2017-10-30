block('search').mod('view', 'form')(
  content()( () => {
    return [ 'movie', 'tag' ].map( elem => {
      return {
        elem: elem
      }
    } )
  } )
)