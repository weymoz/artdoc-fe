block( 'card-movie' ).elem( 'year' )(
  match( node => !node._year ).def()(''),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Год премьеры' } ),
  content()( node => node._year )
)
