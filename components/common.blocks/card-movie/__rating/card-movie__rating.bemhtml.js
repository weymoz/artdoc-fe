block('card-movie').elem('rating')(

  addAttrs()( () => {
    return {
      'data-title': 'Рейтинг Artdoc'
    }
  }),

  addMix()({
    block: 'font', mods: { family: 'pt-mono', loaded: true }
  }),

  content()( node => node._rating )

)
