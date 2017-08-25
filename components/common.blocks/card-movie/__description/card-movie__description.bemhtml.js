block('card-movie').elem('description')(

  match( node => !node._description ).def()( '' ),

  content()( node => node._description )

)

block('card-movie').elem('description').elemMod( 'short', true ).content()( node => {
  if ( node._description.length > 190 ) {
    var text = node._description.substr( 0, 160 );
    node._description = text.substr( 0, Math.min( text.length, text.lastIndexOf( ' ' ) ) ) + '…'
  }
  return node._description
} )