block('breadcrumbs').content()(function() {
  const path = this.data.url.pathname.split( '/' );

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
      case 'movie':
        return [
          {
            elem: 'item',
            url: '/schedule',
            content: 'Расписание'
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
