block('card-movie').elem('description')(

  match( node => !node._description ).def()( '' ),

  content()( node => {
    return {
      html: node._description
    }
  } )

)

block('card-movie').elem('description').elemMod( 'short', true ).content()( node => {

  let limit = [360, 330];

  if (typeof node.mods.view != 'undefined' && node.mods.view == 'schedule') {
    limit = [260, 230];
  }

  if ( node._description.length > limit[0] ) {
    var text = node._description.substr( 0, limit[1] );
    node._description = text.substr( 0, Math.min( text.length, text.lastIndexOf( ' ' ) ) ) + '…'
  }
  return {
    html: node._description
  }
} )
