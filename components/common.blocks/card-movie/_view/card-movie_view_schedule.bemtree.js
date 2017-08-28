block('card-movie').mod('view', 'schedule')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;
    _movie.cover = _movie.cover || {};
    _movie.cover.width = 421;

    return applyNext();
  }),

  content()( ( node, ctx ) => {
    return [
      ctx.movie.schedules && {
        elem: 'aside',
        elemMods: { view: 'schedule' },
        content: [
          { elem: 'schedule-duration' },
          { elem: 'schedule' }
        ]
      },
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          {
            elem: 'header',
            content: [
              { elem: 'is-premiere' },
              { elem: 'awards' }
            ]
          },
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
          },
          {
            elem: 'section',
            content: [
              { elem: 'description', elemMods: { short: true } }
            ]
          }
        ]
      },
      {
        elem: 'aside',
        elemMods: { view: 'action' },
        content: [
          { elem: 'discussion' },
          { elem: 'show-more' },
          { elem: 'buy' }
        ]
      }
    ];
  })
);
