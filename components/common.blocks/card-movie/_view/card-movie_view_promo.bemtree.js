block('card-movie').mod('view', 'promo')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;

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
            elem: 'cover',
            cover: [
              { elem: 'today-label' },
              { elem: 'orig-name' },
              { elem: 'name' },
            ]
          },
        ]
      },
      {
        elem: 'aside',
        content: [
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
          },
          { elem: 'description', elemMods: { 'short': true } },
          {
            elem: 'section',
            content: [
              { elem: 'discussion' },
              { elem: 'show-more' },
            ]
          },
          { elem: 'buy' },
        ]
      }
    ];
  })
);