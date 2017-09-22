block('news-block')(
  match( ( node, ctx ) => !ctx.news ).def()(''),
  def()( ( node, ctx ) => {
    return applyNext( { _api: ctx.news } )
  } ),
  content()( node => {
    const news = node.ctx.news;

    return [
      { elem: 'title', content: news.title },
      { elem: 'content', content: news.content },
      news.image && {
        block: 'link',
        mix: { block: node.block, elem: 'preview', elemMods: { 'has-icon': true } },
        url: news.url,
        target: '_blank',
        content: [
          {
            block: 'image',
            mods: { responsive: true },
            url: news.image
          }
        ]
      },
      {
        elem: 'footer',
        mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
        content: [
          {
            block: 'link',
            mods: { view: 'text', size: 'xs' },
            mix: { block: node.block, elem: 'refer' },
            url: news.url,
            target: '_blank',
            content: news.linkname
          },
          {
            elem: 'date',
            content: [
              {
                block: 'text',
                mods: {
                  format: 'datetime'
                },
                format: 'DD.MM.YY',
                content: news.date
              }
            ]
          }
        ]
      }
      ]
  })
)
