block('nav-menu').js()(true)

block('nav-menu')(
  addMix()({ block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } }),
  content()( ( node, ctx ) => {
    return [
      {
        block: 'dropdown',
        mix: { block: 'nav-menu', elem: 'item' },
        mods: {
          switcher: 'link',
          anchor: 'header',
          'nav-menu': true
        },
        switcher: {
          block: 'link',
          mods: { pseudo: true },
          url: '',
          content: 'Фильмы'
        },
        popup: {
          block: 'page',
          elem: 'section',
          content: {
            elem: 'content',
            content: {
              block: 'menu',
              mods: {
                type: 'radio',
                theme: 'artdoc',
                'nav-menu': true
              },
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              val: ctx.currentCategoryCode,
              content: [
                { block: node.block, elem: 'close' },
                ctx.category && ctx.category.map( item => {
                return {
                  elem: 'item',
                  elemMods: { type: 'link' },
                  val: item.code,
                  content: {
                    block: 'link',
                    url: item.id ? '/movie/category-' + item.code : '/movie',
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
  })
)
