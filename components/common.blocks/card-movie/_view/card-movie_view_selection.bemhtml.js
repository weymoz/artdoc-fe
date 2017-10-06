block('card-movie').mod('view', 'selection')(

  def()( ( node, ctx ) => {
    ctx.movie.cover = ctx.movie.cover || {};

    return applyNext( {
      'ctx.movie.cover.width': 196,
      'ctx.movie.url': ctx.movie.code ? '/movie/' + ctx.movie.code : null
    } );
  }),

  content()( () => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          { elem: 'image' },
          { elem: 'director', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } },
          { elem: 'name', elemMods: { size: 'xs' } }
        ]
      },
      {
        elem: 'aside',
        content: [
          { elem: 'countries', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } },
          { elem: 'year', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } }
        ]
      }
    ];
  })

);
