block('card-movie').mod('view', 'full')(

  def()( ( node, ctx ) => {
    const movie = node.mergeDeep( ctx.movie, {
      cover: { width: 843 }
    } );

    return applyNext( { 'ctx.movie': movie } );
  }),

  js()( true ),

  content()( ( node, ctx ) => {
    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'header',
            content: [
              { elem: 'rating' },
              { elem: 'awards' }
            ]
          },
          { elem: 'video', content: ctx.movie.trailer },
          { elem: 'image' },
          { elem: 'slider' }
        ]
      },
      {
        elem: 'aside',
        content: [
          { elem: 'orig-name' },
          { elem: 'name' },
          {
            elem: 'list',
            elemMods: {
              delimiter: 'vertical'
            },
            content: [
              { elem: 'director' },
              { elem: 'countries' },
              { elem: 'year' }
            ]
          },
          {
            elem: 'list',
            content: [
              { elem: 'tvpg' },
              { elem: 'duration' },
              { elem: 'language' },
              { elem: 'subs' }
            ]
          },
          { elem: 'buy', elemMods: { type: 'button' } },
          { elem: 'description' }
        ]
      },
    ];
  })

)

