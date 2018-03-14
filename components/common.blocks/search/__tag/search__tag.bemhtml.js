block('search').elem('tag')(

  match( node => !node._api.tags || !node._api.tags.length ).def()(''),

  content()( (node, ctx) => {

    if(ctx.lang){
      node._lang = ctx.lang
    }

    return [
      {
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'm' },
        mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
        content: node._lang === 'en' ? 'Tags ' + node._api.tags.length : 'Теги ' + node._api.tags.length
      },
      node._api.tags.map( tag => {
        return {
          block: 'link',
          mods: {
            view: 'tag',
            size: 's',
            theme: node.mods.view === 'page' ? 'artdoc-dark' : 'artdoc'
          },
          url: '/' + node._lang + '/movie/tag-' + tag.value,
          content: tag.value
        }
      } )
    ]
  } )

)
