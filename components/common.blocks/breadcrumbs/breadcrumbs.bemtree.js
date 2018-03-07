block('breadcrumbs')(

def()( ( node, ctx ) => {
  return applyNext( { _url: (node._url || ctx.url) } );
} ),

match( node => node.data && node.data.url && node.data.url.pathname ).def()( node => {
  return applyNext( { 'ctx.url': node.data.url.pathname } )
}),

content()( ( node, ctx ) => {

    const path = node._url.split( '/' );

    // Fix ended `/` in URL
    if ( path[ path.length - 1 ] === '' ) {
      path.pop();
    }

    let breadcrumbs = path.map( page => {
      switch (page) {
        case '':
          return {
            elem: 'item',
            url: '/' + node.data.lang + '/',
            content: node.i18n('breadcrumbs', 'main')
          };

        case 'cinema':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: node.i18n('breadcrumbs', 'cinema')
          };

        case 'selection':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: node.i18n('breadcrumbs', 'selection')
          };

        case 'about':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: node.i18n('breadcrumbs', 'about')
          };

        case 'club':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: node.i18n('breadcrumbs', 'club')
          };

        case 'movie':
          return [
            {
              elem: 'item',
              url: '/' + node.data.lang + '/movie',
              content: node.i18n('breadcrumbs', 'movie')
            },
            ctx.title && {
              elem: 'item',
              elemMods: { active: true },
              content: ctx.title
            }
          ];
      }

      return true;
    });

    return breadcrumbs;
  } )
)
