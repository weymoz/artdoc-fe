block('movie-about').elem('title')(

  match( ( node, ctx ) => !ctx.title ).def()(''),
  
  tag()('h3'),

  addMix()( [
    { block: 'heading', mods: { caps: true, size: 'xs' } },
    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
  ] ),

  content()( ( node, ctx ) => {
    switch ( ctx.title ) {
      case 'info'    : return 'Информация о фильме';
      case 'authors' : return 'Авторы';
      case 'crew'    : return 'Съемочная группа';
      case 'tags'    : return 'Теги';
      case 'awards'  : return 'Награды и фестивали';
      default        : return 'Unknow section';
    }      
  } )

)
