block('card-movie').mod('view', 'grid')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {};
    let lang = ctx.lang || node._lang;

    return applyNext({
      'ctx.movie.cover.width': 308,
      'ctx.movie.url': ctx.movie.code
        ? '/' + lang + '/movie/' + ctx.movie.code
        : null
    });
  }),

  content()((node, ctx) => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          {
            elem: 'header',
            content: [{ elem: 'rating' }, { elem: 'awards' }]
          },
          { elem: 'image' }
        ]
      },
      {
        elem: 'aside',
        content: [
          { elem: 'name', elemMods: { link: true, size: 'xs' } },
          {
            elem: 'director',
            movie: ctx.movie,
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } }
          },
          {
            elem: 'countries',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } }
          },
          {
            elem: 'year',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } }
          }
        ]
      }
    ];
  })
);
