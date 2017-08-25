block('card-selection').mod('view', 'selections')(
  content()( ( node, ctx ) => {
    return [
      {
        elem: 'content',
        content: [
          { elem: 'preview' }
        ]
      },
      {
        elem: 'aside',
        content: [
              ctx.selection.movies.map( item => {
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
