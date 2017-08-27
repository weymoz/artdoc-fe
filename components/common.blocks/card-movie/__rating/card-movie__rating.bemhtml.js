block('card-movie').elem('rating')(

  attrs()( () => {
    return {
      'data-title': 'Рейтинг Artdoc'
    }
  }),

  content()( node => node._rating )

)
