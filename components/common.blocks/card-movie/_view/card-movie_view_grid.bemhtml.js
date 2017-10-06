block('card-movie').mod('view', 'grid')(

  def()( ( node, ctx ) => {
    ctx.movie.cover = ctx.movie.cover || {};

    return applyNext( {
      'ctx.movie.cover.width': 308,
      'ctx.movie.url': ctx.movie.code ? '/movie/' + ctx.movie.code : null
    } );
  }),

  content()( () => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          {
            elem: 'header',
            content: [
              { elem: 'rating' },
              { elem: 'awards' }
            ]
          },
          { elem: 'image' }
        ]
      },
      {
        elem: 'aside',
        content: [
          { elem: 'name', elemMods: { link: true, size: 'xs' } },
          { elem: 'director', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } },
          { elem: 'countries', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } },
          { elem: 'year', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } }
        ]
      }
    ];
  })

);
