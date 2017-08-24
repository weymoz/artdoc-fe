block('breadcrumbs').content()(function() {
  const path = this.data.url.pathname.split( '/' );

  let breadcrumbs = [];

  path.map( page => {
    switch (page) {
      case '':
        breadcrumbs.push({
          elem: 'item',
          url: '/',
          content: 'Главная'
        });
        break;
      case 'cinema':
        breadcrumbs.push({
          elem: 'item',
          elemMods: {
            active: 'true'
          },
          content: 'Онлайн-киносеансы'
        });
          break;
      case 'movie':
        breadcrumbs.push([
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
        ]);
        break;
    }
  });

  return breadcrumbs;
});
