block('movie-about').elem('title')(

  match( ( node, ctx ) => !ctx.title ).def()(''),

  tag()('h3'),

  addMix()( [
    { block: 'heading', mods: { caps: true, size: 'xs' } },
    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
  ] ),

  content()( ( node, ctx ) => {
    switch ( ctx.title ) {
      case 'info'    : return node._lang === 'en' ? 'Movie about' : 'Информация о фильме';
      case 'authors' : return node._lang === 'en' ? 'Authors' : 'Авторы';
      case 'crew'    : return node._lang === 'en' ? 'Crew' : 'Съемочная группа';
      case 'tags'    : return node._lang === 'en' ? 'Tags' : 'Теги';
      case 'awards'  : return node._lang === 'en' ? 'Movie awards and festivals' : 'Награды и фестивали';
      default        : return 'Unknown section';
    }
  } )

)
