block('breadcrumbs').content()(function() {
  const path = this.data.url.pathname.split( '/' );
  
  // Fix ended `/` in URL
  if ( path[ path.length - 1 ] === '' ) {
    path.pop();
  }

  return path.map( page => {
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

    return false;
  });
});
