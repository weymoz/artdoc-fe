block('card-selection').mod('view', 'selections')(
  content()( ( node, ctx ) => {
    var newMovie = ctx.selection.movies.slice();
    return [
      {
        elem: 'content',
        url: '/selection/' + node._code,
        content: [
          {
            elem: 'preview',
            width: 630,
            height: 320
          },
          {
            elem: 'preview-info',
              content: [
                { elem: 'name' },
                { elem: 'author' },
                { elem: 'counter' }
              ]
          },
        ]
      },
      {
        elem: 'aside',
        content: [
              newMovie.splice(0, 3).map( item => {
                return {
                  block: 'card-movie',
                  mix: { block: node.block, elem: 'item' },
                  mods: {
                      view: 'selection'
                  },
                  movie: item
                }
              } )
            ]
        }
     ]
  })
);
