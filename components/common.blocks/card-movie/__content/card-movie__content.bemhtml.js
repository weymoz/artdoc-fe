block('card-movie').elem('content')(
  match( node => node.mods.view === 'promo' && node._url )(
    tag()('a'),
    addMix()( () => { return { block: 'link' } } ),
    addAttrs()( node => {
      return {
        href: node._url
      }
    } )
  )
)