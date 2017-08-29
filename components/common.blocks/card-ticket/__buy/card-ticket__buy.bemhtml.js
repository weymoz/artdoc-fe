block('card-ticket').elem('buy')(

  match( node => !node.price && !node._price.price ).def()(''),

  content()( node => {
    return 'Купить ' + node._price.price + ' ₽'
  })
)
