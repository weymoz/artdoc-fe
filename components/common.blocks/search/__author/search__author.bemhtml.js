block('search').elem('author')(

  match( node => !node._api.author ).def()(''),

  content()( (node, ctx) => {

    if(ctx.lang){
      node._lang = ctx.lang;
    }

    return node._api.author && node._api.author.length
      ? [
          {
            elem: 'title',
            elemMods: { view: 'condensed-bold', size: 'm' },
            mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
            content: node._lang === 'en' ? 'Authors ' + node._api.author.length : 'Авторы ' + node._api.author.length
          },
          node._api.author.map( author => {
            return {
              block: 'card-author',
              mods: { size: 'l' },
              author: author,
              color: '#fff',
              lang: node._lang
            }
          } )
        ]
      : ''
  } )

)
