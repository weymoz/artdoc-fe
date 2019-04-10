block('card-movie').mod('view', 'full')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {};

    return applyNext({ 'ctx.movie.cover.width': 843 });
  }),

  addJs()(true),

  content()((node, ctx) => {

    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'header',
            content: [{ elem: 'rating' }, { elem: 'awards' }]
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
          { elem: 'name', elemMods: { 'has-dot': true, size: 'xl' } },
          {
            elem: 'listbox',
            content: {
              elem: 'list',
              elemMods: { delimiter: 'vertical' },
              content: [
                { elem: 'director', movie: ctx.movie },
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
          { elem: 'buy', elemMods: { type: 'button' } },
          { elem: 'description' }
        ]
      }
    ];
  })
);
