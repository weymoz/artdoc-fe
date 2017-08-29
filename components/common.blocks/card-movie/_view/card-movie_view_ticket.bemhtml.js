block('card-movie').mod('view', 'ticket')(

  def()( ( node, ctx ) => {
    const movie = node.mergeDeep( ctx.movie, {
      cover: { width: 235 },
      url: ctx.movie.code ? '/movie/' + ctx.movie.code : null
    } );

    return applyNext( { 'ctx.movie': movie } );
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
          }
        ]
      }
    ];
  })

);
