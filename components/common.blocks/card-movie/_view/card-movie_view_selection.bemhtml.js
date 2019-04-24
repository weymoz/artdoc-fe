block('card-movie').mod('view', 'selection')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {}
    let lang = ctx.lang || node._lang

    return applyNext({
      'ctx.movie.cover.width': 196,
      'ctx.movie.url': ctx.movie.code
        ? '/' + lang + '/movie/' + ctx.movie.code
        : null
    })
  }),

  content()(node => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [{ elem: 'image' }]
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'name',
            elemMods: { size: 'xs', link: true, offsetTop: true }
          },
          {
            elem: 'director',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            movie: node.ctx.movie
          }
        ]
      },
      {
        elem: 'aside',
        content: [
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
    ]
  })
)
