block('card-movie').elem('is-premiere')(

  match( node => !node._premiere ).def()(''),

  addMix()({ block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }),

  content()( (node) => {
    return  node._lang === 'en' ? 'Premiere' : 'Премьера'
  })

)
