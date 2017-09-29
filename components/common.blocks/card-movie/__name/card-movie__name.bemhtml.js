block( 'card-movie' ).elem( 'name' )(

  match( node => !node._name ).def()(''),

  content()( node => node._name ),

  match( node => node._url && node.mods.view !== 'promo' && node.mods.view !== 'selection' ).content()( node => {
    return {
      block: 'link',
      mods: { view: 'text' },
      url: node._url,
      content: node._name
    }
  } )
)
