block('nav-menu')(

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
          content: node.i18n('header', 'movies')
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
                    url: item.id ? ('/' + node.data.lang + '/movie/category-' + item.code) : ('/' + node.data.lang + '/movie'),
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
        url: '/' + node.data.lang + '/selection',
        content: node.i18n('header', 'selections')
      },
      {
        block: 'link',
        mix: { block: 'nav-menu', elem: 'item' },
        url: '/' + node.data.lang + '/cinema',
        content: node.i18n('header', 'showtimes')
      }
    ]
  })

)

