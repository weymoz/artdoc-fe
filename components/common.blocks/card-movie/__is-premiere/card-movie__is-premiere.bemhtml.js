block('card-movie').elem('is-premiere')(

  match( node => !node._premiere ).def()(''),

  content()( 'Премьера' )

)
