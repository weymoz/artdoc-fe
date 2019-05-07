block('news-block')(
  match( ( node, ctx ) => !ctx.news ).def()(''),
  def()( ( node, ctx ) => {
    return applyNext( { _api: ctx.news } )
  } ),
  content()( (node, ctx) => {
    const news = ctx.news;

    const dateSplit = news.date.split('.');
    const dateTimestamp = new Date( dateSplit[ 2 ], dateSplit[ 1 ] - 1, dateSplit[ 0 ], 0, 0, 0, 0 ).getTime() / 1000;

    return [
      { elem: 'title', content: ctx.title },
      news.image && news.image.id && {
        block: 'link',
        mix: { block: node.block, elem: 'preview', elemMods: { 'has-icon': !!news.video_icon } },
        url: news.url,
        target: '_blank',
        content: [
          {
            block: 'image',
            mix: { block: node.block, elem: 'image' },
            mods: { responsive: true, 'has-resize': true },
            url: news.image.id,
            width: 193,
            height: 110
          }
        ]
      },
      { elem: 'content', content: [
          {
            block: 'text',
            mods: { bold: true },
            content: news.title
          },
          { tag: 'br' },
          news.text
        ]
      },
      {
        elem: 'footer',
        mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
        content: [
          news.url
            ? {
                block: 'link',
                mods: { view: 'text', size: 'xs' },
                mix: { block: node.block, elem: 'refer' },
                url: news.url,
                target: '_blank',
                content: news.publisher
              }
            : news.publisher,
          {
            elem: 'date',
            content: [
              {
                block: 'text',
                mods: {
                  format: 'datetime'
                },
                format: 'DD.MM.YY',
                content: dateTimestamp
              }
            ]
          }
        ]
      }
      ]
  })
)
