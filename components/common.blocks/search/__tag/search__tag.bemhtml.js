block('search').elem('tag')(

  match( node => !node._api.tags || !node._api.tags.length ).def()(''),

  content()( node => {
    return [
      {
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'm' },
        mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
        content: 'Теги ' + node._api.tags.length
      },
      node._api.tags.map( tag => {
        return {
          block: 'link',
          mods: {
            view: 'tag',
            size: 's',
            theme: node.mods.view === 'page' ? 'artdoc-dark' : 'artdoc'
          },
          url: '/movie/tag-' + tag.value,
          content: tag.value
        }
      } )
    ]
  } )

)