block( 'card-movie' ).elem( 'countries' )(

  match( node => { return !node._countries || !node._countries.length } ).def()(''),

  tag()( ( node, ctx ) => ctx.tag || 'span' ),

  addAttrs()( { title: 'Страна' } ),

  content()( node => {
    return node._countries.map( country => { return country.name } ).join(', ')
  } )
)
