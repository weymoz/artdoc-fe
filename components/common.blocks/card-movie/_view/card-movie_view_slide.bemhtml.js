block('card-movie').mod('view', 'slide')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {}

    return applyNext({ 'ctx.movie.cover.width': 896 })
  }),

  content()((node, ctx) => {
    return applyNext({
      'ctx.content': {
        elem: 'content',
        content: [
          {
            elem: 'info',
            content: [
              { elem: 'icon' },
              {
                elem: 'title',
                mix: {
                  block: 'font',
                  mods: {
                    family: 'helvetica-neue-condensed-bold',
                    loaded: true
                  }
                },
                content:
                  ctx.lang === 'en'
                    ? 'Today online'
                    : 'Сегодня в онлайн-киносеансах'
              }
            ]
          },
          { elem: 'image' },
          {
            elem: 'cover',
            content: [
              { elem: 'orig-name' },
              { elem: 'name', elemMods: { 'has-dot': true, size: 'xl' } },
              {
                elem: 'list',
                elemMods: { delimiter: 'vertical' },
                content: [
                  { elem: 'director', movie: ctx.movie },
                  { elem: 'countries' },
                  { elem: 'year' }
                ]
              },
              { elem: 'description', elemMods: { short: true } },
              { elem: 'buy', elemMods: { type: 'button' } }
            ]
          }
        ]
      }
    })
  }),

  elem('name')(addMix()({ block: 'heading', mods: {} }))
)
