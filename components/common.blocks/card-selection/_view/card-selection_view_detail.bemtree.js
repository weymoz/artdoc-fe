block('card-selection').mod('view', 'detail')(
  content()( ( node, ctx ) => {
    return [
        {
          elem: 'content',
            content: [
              { block: 'breadcrumbs' },
              { elem: 'preview' },
              {
                elem: 'preview-info',
                  content: [
                    { elem: 'name' },
                    { elem: 'author' },
                    { elem: 'counter' }
                  ]
              },
              { elem: 'description' }
            ]
        },
        {
        elem: 'aside',
        content: [
          ctx.selection.movies.map( item => {
            return {
              block: 'card-movie',
              mods: {
                  view: [ 'schedule' ]
              },
              movie: item
            }
          } )
        ]
        }
     ]
  })
);




