block('card-ticket').elem('buy')(

  match( node => !node.price && !node._price.price ).def()(''),

  content()( node => {
    return node._price.price + ' ₽'
  }),

  match( node => node.mods.view === 'movie' ).prependContent()('Купить '),

  match( node => node._promo === 'meduza' ).content()('Бесплатно для подписчиков Meduza')
)
