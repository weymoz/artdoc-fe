block('card-ticket').elem('buy')(

  match( node => !node.price && !node._price.price ).def()(''),

  content()( node => node._price.price + ' ₽'),

  match( node => node.mods.view === 'movie' ).prependContent()('Купить '),

  match( node => node.mods.promo === 'meduza' )(
    addElemMods()( node => {
      return {
        promo: node.mods.promo
      }
    }),
    content()( 'Бесплатно для читателей «Медузы»' )
  )
)
