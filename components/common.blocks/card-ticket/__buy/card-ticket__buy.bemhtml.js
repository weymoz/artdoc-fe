block('card-ticket').elem('buy')(

  match( node => !node._price || !node._price.price ).def()(''),

  content()( node => node._price.price + ' ₽'),

  match( node => node.mods.view === 'movie' ).prependContent()('Купить ')

)
