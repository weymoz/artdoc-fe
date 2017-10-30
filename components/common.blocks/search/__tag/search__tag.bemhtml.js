block('search').elem('tag')(

  match( node => !node._api.tags ).def()(''),

  content()( node => {
    return node._api.tags && node._api.tags.length
      ? [
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
                theme: 'artdoc-dark'
              },
              url: '/movie/tag-' + tag.value,
              content: tag.value
            }
          } )
        ]
      : ''
  } )

)