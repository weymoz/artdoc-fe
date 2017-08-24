block('movie-about').elem('title')(

  tag()('h3'),

  match( ( node, ctx ) => ctx.title ).content()( ( node, ctx ) => {
    switch ( ctx.title ) {
      case 'info'    : return 'Информация о фильме';
      case 'authors' : return 'Авторы';
      case 'crew'    : return 'Съемочная группа';
      case 'tags'    : return 'Теги';
      default:
        return 'Unknow section'
    }
  } )
)
