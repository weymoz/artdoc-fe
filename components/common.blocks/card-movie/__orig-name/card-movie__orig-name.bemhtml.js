block( 'card-movie' ).elem( 'orig-name' )(

  match( node => { return !node._orig_name || node._orig_name === node._name } ).def()( '' ),

  tag()( 'small' ),

  addMix()( { block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } } ),

  content()( node => node._orig_name )

)
