block('card-movie').mod('view', 'list')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {};
    let lang = ctx.lang || node._lang;

    return applyNext({
      'ctx.movie.cover.width': 421,
      'ctx.movie.url': ctx.movie.code
        ? '/' + lang + '/movie/' + ctx.movie.code
        : null
    });
  }),

  content()((node, ctx) => {
    return [
      ctx.movie.schedules && {
        elem: 'aside',
        elemMods: { view: 'schedule' },
        content: [{ elem: 'schedule-duration' }, { elem: 'schedule' }]
      },
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
          { elem: 'orig-name' },
          { elem: 'name', elemMods: { link: true, size: 'm' } },
          {
            elem: 'listbox',
            content: {
              elem: 'list',
              elemMods: { delimiter: 'vertical' },
              content: [
                { elem: 'director', movie: node.ctx.movie },
                { elem: 'countries' },
                { elem: 'year' }
              ]
            }
          },
          {
            elem: 'listbox',
            content: {
              elem: 'list',
              content: [
                { elem: 'tvpg' },
                { elem: 'duration' },
                { elem: 'language' },
                { elem: 'subs' }
              ]
            }
          },
          {
            elem: 'section',
            content: [{ elem: 'description', elemMods: { short: true } }]
          }
        ]
      },
      {
        elem: 'aside',
        elemMods: { view: 'action' },
        content: [
          { elem: 'discussion' },
          { elem: 'buy', elemMods: { type: 'button' } }
        ]
      }
    ];
  })
);
