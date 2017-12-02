block('card-movie').mod('view', 'promo')(

  def()( ( node, ctx ) => {
    ctx.movie.cover = ctx.movie.cover || {};

    return applyNext( {
      'ctx.movie.cover.width': 745,
      'ctx.movie.url': ctx.movie.code ? '/movie/' + ctx.movie.code : null
    } );
  } ),

  content()( node => {
    const isPeriod = node._schedules.length > 1;
    const prefix = isPeriod ? 'c ' : '';

    return [
      node._schedules && {
        elem: 'aside',
        elemMods: { view: 'schedule' },
        content: [
          // { elem: 'schedule-duration' },
          {
            elem: 'schedule',
            elemMods: { period: isPeriod },
            prefix: prefix,
            content: node._schedules[ 0 ].date
          },
          isPeriod && {
            elem: 'schedule',
            elemMods: { period: true },
            prefix: 'по ',
            content: node._schedules[ node._schedules.length - 1 ].date
          }
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
          { elem: 'image' },
          {
            elem: 'cover',
            content: [
              { elem: 'is-today' },
              { elem: 'orig-name' },
              { elem: 'name', elemMods: { 'has-dot': true, size: 'xl' } },
            ]
          }
        ]
      },
      {
        elem: 'aside',
        content: [
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
          { elem: 'description', elemMods: { 'short': true } },
          {
            elem: 'section',
            content: [
              { elem: 'discussion' }
            ]
          },
          { elem: 'buy', elemMods: { type: 'button' } },
        ]
      }
    ];
  })
);
