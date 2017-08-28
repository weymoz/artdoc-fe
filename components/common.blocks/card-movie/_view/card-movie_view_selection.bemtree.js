block('card-movie').mod('view', 'selection')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;
    _movie.cover.width = 196;

    return applyNext();
  }),

  content()( () => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          { elem: 'image' },
          { elem: 'director', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } } },
          { elem: 'name' }
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
