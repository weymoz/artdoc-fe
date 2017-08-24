block('card-movie').elem('description')(

  match( node => !node._description ).def()( '' ),

  content()( node => node._description )

)

block('card-movie').elem('description').elemMod( 'short', true ).content()( node => {
  return node._description.length > 190
    ? node._description.replace( /^(.{140}[^\s]*).*/, '$1' ) + '…'
    : node._description
} )