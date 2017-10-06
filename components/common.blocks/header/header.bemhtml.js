block('header')(
  tag()('header'),
  content()( ( node, ctx ) => {
    return [
      {
        block: 'logo',
        mix: { block: 'header', elem: 'logo' }
      },
      {
        block: 'logo',
        mods: { title: true },
        mix: { block: 'header', elem: 'title' }
      },
      {
        block: 'nav-menu',
        mix: { block: 'header', elem: 'menu' },
        category: ctx.category,
        currentCategoryCode: ctx.currentCategoryCode
      },
      {
        block: 'dropdown',
        mods: {
          switcher: 'link',
          anchor: 'header'
        },
        mix: { block: 'header', elem: 'search' },
        switcher: {
          block: 'link',
          mods: { pseudo: true, },
          url: '/search',
          content: 'Поиск'
        },
        popup: {
          block: 'page',
          elem: 'section',
          content: {
            elem: 'content',
            elemMods: { width: 'narrow' },
            content: {
              block: 'search',
              content: [
                {
                  block: 'form',
                  mods: { view: 'search' },
                  method: 'GET',
                  action: '/search',
                  content: [
                    { tag: 'br' },
                    { tag: 'br' },
                    {
                      elem: 'content',
                      content: {
                        block: 'form-field',
                        mods: {
                          type: 'input'
                        },
                        name: 'q',
                        content: {
                          elem: 'control',
                          content: {
                            block: 'input',
                            mods: {
                              type: 'search',
                              width: 'available'
                            },
                            placeholder: 'Поиск'
                          }
                        }
                      }
                    },
                    { tag: 'br' },
                    { tag: 'br' },
                    // {
                    //   elem: 'footer',
                    //   content: [
                    //     {
                    //       block: 'paragraph',
                    //       mods: {
                    //         align: 'center'
                    //       },
                    //       content: 'К сожалению, мы ничего не нашли по запросу «айцуке». Попробуйте еще раз или загляните в каталог фильмов.'
                    //     }
                    //   ]
                    // },
                    // { tag: 'br' },
                    // { tag: 'br' }
                  ]
                }
              ]
            }
          }
        }
      },
/*
      {
        elem: 'lang',
        content: {
          block: 'button',
          mods: {
            view: 'plain',
            size: 'xxl'
          },
          text: 'En'
        }
      },
*/    
      {
        elem: 'social',
        content: Object.keys( ctx.social ).map( name => {
          return {
            block: 'button',
            mods: {
              type: 'link',
              view: 'plain',
              size: 'xxl'
            },
            attrs: { target: '_blank' },
            icon: {
              block: 'icon',
              mods: {
                social: name,
                size: 'xl'
              }
            },
            url: ctx.social[ name ]
          }
        } )
      },
      // {
      //   elem: 'user',
      //   content: {
      //     block: 'button',
      //     mods: {
      //       // type: 'link',
      //       view: 'plain',
      //       size: 'xxl'
      //     },
      //     icon: {
      //       block: 'icon',
      //       mods: {
      //         symbol: 'user',
      //         size: 'xxl'
      //       }
      //     },
      //     url: '/login'
      //   }
      // }
    ];
  })
)