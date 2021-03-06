block('card-movie').mod('view', 'schedule')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {}
    let lang = ctx.lang || node._lang

    return applyNext({
      'ctx.movie.cover.width': 421,
      'ctx.movie.url': ctx.movie.code
        ? '/' + lang + '/movie/' + ctx.movie.code
        : null
    })
  }),

  content()((node, ctx) => {
    let langPrefix = node._lang === 'en' ? 'from ' : 'c '
    const isPeriod = node._schedules.length > 1
    const prefix = isPeriod ? langPrefix : ''

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
            content: node._schedules[0].date
          },
          isPeriod && {
            elem: 'schedule',
            elemMods: { period: true },
            prefix: node._lang === 'en' ? 'till ' : 'по ',
            content: node._schedules[node._schedules.length - 1].date
          }
        ]
      },
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          {
            elem: 'header',
            content: [{ elem: 'is-premiere' }, { elem: 'awards' }]
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
          { elem: 'show-more' },
          { elem: 'buy', elemMods: { type: 'button' } }
        ]
      }
    ]
  })
)
