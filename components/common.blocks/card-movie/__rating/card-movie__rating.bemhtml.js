block('card-movie').elem('rating')(

  addAttrs()( (node) => {
    console.log(node._lang);
    return {
      'data-title': node._lang === 'en' ? 'Artdoc rating' :'Рейтинг Artdoc'
    }
  }),

  addMix()({
    block: 'font', mods: { family: 'pt-mono', loaded: true }
  }),

  content()( node => node._rating )

)
