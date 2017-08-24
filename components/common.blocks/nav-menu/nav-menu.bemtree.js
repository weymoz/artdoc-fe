block('nav-menu').content()( node => {
  const category = node.data.category;
  return [
    {
      block: 'dropdown',
      mix: { block: 'nav-menu', elem: 'item' },
      mods: {
        switcher: 'link',
        'nav-menu': true
      },
      switcher: {
        block: 'link',
        mods: {
          pseudo: true,
        },
        url: '/movie',
        content: 'Фильмы'
      },
      popup: {
        block: 'section',
        content: {
          elem: 'content',
          content: {
            block: 'menu',
            mods: {
              type: 'radio',
              'nav-menu': true,
            },
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            content: [
              {
                elem: 'item',
                elemMods: {
                  type: 'link',
                },
                val: 'all',
                content: {
                  block: 'link',
                  url: '/movie',
                  content: 'Все фильмы'
                }
              },
              category && category.map( item => {
              return {
                elem: 'item',
                elemMods: {
                  type: 'link',
                },
                val: item.code,
                content: {
                  block: 'link',
                  url: '/movie/category-' + item.id,//item.code,
                  content: item.name
                }
              }
            } )
            ]
          }
        }
      }
    },
    {
      block: 'link',
        mix: { block: 'nav-menu', elem: 'item' },
        url: '/selection',
        content: 'Подборки'
    },
    {
      block: 'link',
      mix: { block: 'nav-menu', elem: 'item' },
      url: '/cinema',
      content: 'Киносеансы'
    }
  ]
});
