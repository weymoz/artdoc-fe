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
          content: [
          node.i18n('header', 'movies'),
          {
            block: 'icon',
            mods: {
              symbol: 'arrowDropdown'
            }
          }
          ]
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
                'nav-menu': true,
              },
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              val: ctx.currentCategoryCode,
              content: [
                { block: node.block, elem: 'close' },
                ctx.category && ctx.category.map( item => {
                let isChecked = ctx.currentCategoryCode === item.code ? true : false;
                let isSpecial = item.code === 'online' ? true : false;
                return {
                  elem: 'item',
                  elemMods: { type: 'link', checked: isChecked, special: isSpecial },
                  val: item.code,
                  content: {
                    block: 'link',
                    url: item.id ? ('/' + node.data.lang + '/movie/category-' + item.code + '/?full_movie=on' ) : (item.code === 'online' ? '/' + node.data.lang + '/movie?page=1&sort=-rating&view=grid&full_movie=on' : '/' + node.data.lang + '/movie'),
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
        mods: {
          special: true,
        },
        url: '/' + node.data.lang + '/support',
        content: node.i18n('header', 'support')
      }
    ]
  })

)

