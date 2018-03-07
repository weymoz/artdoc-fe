block('header')(


  match( node => node.data && node.data.category ).def()( node => {

    const category = [
      {
        name: node.i18n('index', 'allMovies'),
        id: null,
        code: 'all',
      },
      ...node.data.lang === 'en' ? node.data.categoryEn : node.data.category
    ];

    const newCtx = Object.assign( {}, node.ctx, {
      category: category,
      currentCategoryCode: node.data.currentCategoryCode,
      social: node.data.meta.social
    } );

    return applyNext( { ctx: newCtx } );
  }),

  content()( ( node, ctx ) => {

    return [
      {
        block: 'logo',
        mix: { block: 'header', elem: 'logo' },
        prefix: '/' + ctx.lang
      },
      {
        block: 'logo',
        mods: { title: true },
        mix: { block: 'header', elem: 'title' },
        prefix: '/' + ctx.lang
      },
      {
        block: 'nav-menu',
        mix: { block: 'header', elem: 'menu' },
        category: ctx.category,
        currentCategoryCode: ctx.currentCategoryCode,
        lang: node.data.lang
      },
      {
        block: 'link',
        mods: { pseudo: true, },
        mix: { block: 'header', elem: 'search', js: true },
        url: '/search',
        content: [
        {
          block: 'icon',
          mods: {
            symbol: 'search'
          }
        },
        {
          block: 'text',
          mods: {
            theme: 'artdoc-dark',
            size: 'l'
          },
          content: node.i18n('header', 'search')
        }
        ]
      },
      {
        elem: 'lang',
        content: {
          block: 'button',
          mods: {
            view: 'plain',
            size: 'xxl',
            type: 'link'
          },
          url: ctx.link,
          text: node.i18n('header', 'lang')
        }
      },
      {
        block: 'modal',
        mods: { view: 'search', size: 'xxl', theme: 'artdoc-dark' },
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
      {
        block: 'link',
        mods: { pseudo: true, },
        mix: { block: 'header', elem: 'show-menu', js: true },
        url: '/',
        content: [
        {
          block: 'icon',
          mods: {
            symbol: 'burger'
          }
        },
        {
          block: 'text',
          mods: {
            theme: 'artdoc-dark',
            size: 'l'
          },
          content: node.i18n('header', 'menu')
        }
        ]
      },
      {
        block: 'modal',
        mods: { view: 'mobile-menu', size: 'xxl', theme: 'artdoc-dark' },
        content:{
          block: 'nav-menu',
          mix: { block: 'header', elem: 'mobile-menu' },
          category: ctx.category,
          currentCategoryCode: ctx.currentCategoryCode
        }
      },
      { elem: 'social', social: ctx.social },

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
