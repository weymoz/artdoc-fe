block( 'card-movie' ).elem( 'director' )(
  match( node => { return !node._director } ).def()(''),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Режиссёр' } ),
  content()( node => {
    return node._director;
  } )
)
