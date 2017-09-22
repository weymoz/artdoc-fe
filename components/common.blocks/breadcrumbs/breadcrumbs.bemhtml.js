block('breadcrumbs')(

  def()( ( node, ctx ) => {
    return applyNext( { _url: (node._url || ctx.url) } );
  } ),

  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),

  tag()('nav'),

  match( node => node._url ).content()( node => {
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
            url: '/',
            content: 'Главная'
          };

        case 'cinema':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: 'Онлайн-киносеансы'
          };

        case 'selection':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: 'Подборки'
          };

        case 'about':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: 'О проекте'
        };

        case 'club':
          return {
            elem: 'item',
            elemMods: {
              active: 'true'
            },
            content: 'Клуб Artdoc'
        };

        case 'movie':
          return [
            {
              elem: 'item',
              url: '/movie',
              content: 'Все фильмы'
            },
            {
              elem: 'item',
              elemMods: {
                active: true
              },
              content: this.data.title
            }
          ];
      }

      return true;
    });

    return breadcrumbs;
  } )
)
