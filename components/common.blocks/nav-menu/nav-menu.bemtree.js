block('nav-menu').content()( node => {
  const categoryCode = node.data.currentCategoryCode;
  const category = [
    {
      name: 'Все фильмы',
      id: null,
      code: 'all',
    },
    ...node.data.category
  ];

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
              'nav-menu': true
            },
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            val: categoryCode,
            content: category && category.map( item => {
              return {
                elem: 'item',
                elemMods: {
                  type: 'link'
                },
                val: item.code,
                content: {
                  block: 'link',
                  url: item.id ? '/movie/category-' + item.code : '/movie',
                  content: item.name
                }
              }
            } )
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
