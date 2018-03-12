block('card-movie').mod('view', 'ticket')(

  def()( ( node, ctx ) => {
    ctx.movie.cover = ctx.movie.cover || {};
    let lang = ctx.lang || node._lang;

    return applyNext( {
      'ctx.movie.cover.width': 235,
      'ctx.movie.url': ctx.movie.code ? '/' + lang + '/movie/' + ctx.movie.code : null
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
