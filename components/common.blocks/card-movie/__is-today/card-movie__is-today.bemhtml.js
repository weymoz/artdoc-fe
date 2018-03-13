block('card-movie').elem('is-today')(

  addMix()({ block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }),

  content()( (node) => {
    return  node._lang === 'en' ? 'Today in online-cinema' : 'Сегодня в онлайн-кинотеатрах';
  })

)
