block( 'card-movie' ).elem( 'orig-name' )(
  match( node => { return !node._orig_name || node._orig_name === node._name } ).def()( '' ),
  content()( node => {
    return node._orig_name
  } ),
  tag()( 'small' )
)
