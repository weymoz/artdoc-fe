block('card-movie').mod('view', 'order')(

  def()( ( node, ctx ) => {
    return applyNext( {
      'ctx.movie.cover.width': 235,
      'ctx.movie.url': ctx.movie.code ? '/movie/' + ctx.movie.code : null
    } );
  }),

  content()( () => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          { elem: 'image' }
        ]
      },
      {
        elem: 'aside',
        content: [
          { elem: 'orig-name' },
          { elem: 'name', elemMods: { link: true, size: 'm' } },
          {
            elem: 'list',
            elemMods: { delimiter: 'vertical' },
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
          }
        ]
      }
    ];
  })

);
