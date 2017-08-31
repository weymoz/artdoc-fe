block('card-selection').mod('view', 'detail')(
  content()( ( node, ctx ) => {
    return [
        {
          elem: 'content',
            content: [
              { block: 'breadcrumbs' },
              {
                elem: 'preview',
                width: 1024,
                height: 500
              },
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
                  view: [ 'list' ]
              },
              movie: item,
            }
          } )
        ]
        }
     ]
  })
);




