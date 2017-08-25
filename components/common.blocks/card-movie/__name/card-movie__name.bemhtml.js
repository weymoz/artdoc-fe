block( 'card-movie' ).elem( 'name' )(

  match( node => !node._name ).def()(''),

  tag()('h2'),

  content()( node => node._name ),

  match( node => node._url && node.mods.view !== 'promo' ).content()( node => {
    return {
      block: 'link',
      mods: {
        view: 'text'
      },
      url: node._url,
      content: node._name
    }
  } )
)
