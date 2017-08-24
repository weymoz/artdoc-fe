block('card-movie').mod('view', 'promo')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;

    return applyNext();
  }),

  content()( ( node, ctx ) => {
    return [
      (ctx.movie.schedule && ctx.movie.schedule.length) && {
        elem: 'aside',
        elemMods: { view: 'schedule' },
        content: [
          { elem: 'schedule-duration' },
          { elem: 'schedule' }
        ]
      },
      {
        elem: 'content',
        elemMods: { view: 'cover' },
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
          {
            elem: 'content',
            content: [
              { elem: 'description', elemMods: { 'short': true } },
              { elem: 'discussion' },
              { elem: 'show-more' },
              { elem: 'buy' }
            ]
          }
        ]
      }
    ];
  })
);