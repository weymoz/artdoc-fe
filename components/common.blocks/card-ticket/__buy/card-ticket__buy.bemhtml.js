block('card-ticket').elem('buy')(

  match( node => !node._price || !node._price.price ).def()(''),

  content()( node => {
    let currency = node._lang === 'en' ? ' $' : ' ' + node._currency;
    let correctView = node._lang === 'en' ? ( currency + node._price.price ) : ( node._price.price + currency );
    return correctView
  }),

  match( node => node.mods.view === 'movie' ).prependContent()( (node) => {

    let text = node._lang === 'en' ? 'Purchase ' : 'Купить '

    return text
  })
)
