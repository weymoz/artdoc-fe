block('card-author')(

  match( ( node, ctx ) => ctx.author ).def()( ( node, ctx ) => {
    Object.keys( ctx.author ).map( key => {
      node[ '_' + key ] = ctx.author[ key ];
      return true;
    } );

    node._meta = ctx.content;

    switch ( node.mods.size ) {
      case 'xs':
        node.width = 48;
        node.height = 48;
        break;
      default:
        node.width = 84;
        node.height = 84;
    }

    return applyNext();
  } ),

  match( node => !node._image_id ).addMods()( { 'no-photo': true } ),

  match( node => node._image_id ).content()( node => {
    return {
      block: 'image',
      mods: { circle: true, 'has-resize': true },
      mix: { block: 'card-author', elem: 'aside' },
      width: node.width,
      height: node.height,
      url: node._image_id
    }
  } ),

  match( node => node._name )(
    appendContent()( node => {
      return  {
        elem: 'content',
        content: {
          elem: 'header',
          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
          content: node._name
        }
      }
    })
  ),

  match( node => node._meta )(
    elem('content').appendContent()( node => node._meta )
  )

)
