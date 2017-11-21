block('header')(
  tag()('header'),
  match( ( node, ctx ) => ctx.social ).elem('social').content()( ( node, ctx ) => {
    return Object.keys( ctx.social ).map( name => {
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
  } ),
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
        block: 'link',
        mods: { pseudo: true, },
        mix: { block: 'header', elem: 'search', js: true },
        url: '/search',
        content: 'Поиск'
      },
      {
        block: 'modal',
        mods: { size: 'xxl', view: 'search' },
        content: { block: 'form', mods: { view: 'search' }, zIndexGroupLevel: 1 }
      },
      // {
      //   block: 'dropdown',
      //   mods: {
      //     switcher: 'link',
      //     anchor: 'header'
      //   },
      //   switcher: 
      //   popup: {
      //     block: 'page',
      //     elem: 'section',
      //     content: {
      //       elem: 'content',
      //       elemMods: { width: 'narrow' },
      //       content: { block: 'form', mods: { view: 'search' } }
      //     }
      //   }
      // },
      { elem: 'social', social: ctx.social },
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