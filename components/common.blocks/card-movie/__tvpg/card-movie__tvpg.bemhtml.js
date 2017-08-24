block( 'card-movie' ).elem( 'tvpg' )(
  match( node => !node._tvpg ).def()(''),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Рейтинг' } ),
  content()( node => node._tvpg )
)
