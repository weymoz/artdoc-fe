block('card-author')(
  match( ( node, ctx ) => !ctx.author ).def()(''),

  match( ( node, ctx ) => ctx.author ).def()( ( node, ctx ) => {
    Object.keys( ctx.author ).map( key => {
      node[ '_' + key ] = ctx.author[ key ];
      return true;
    } );

    switch ( node.mods.size ) {
      case 'xs':
        node._size = '48x48';
        break;

      default:
        node._size = '84x84';
    }

    return applyNext();
  } ),

  match( node => !node._image_id )(
    addMods()({ 'no-photo': true })
  ),

  content()( { elem: 'aside' } ),

  match( node => node._image_id ).elem('aside').replace()( node => {
    return {
      block: 'image',
      mix: { block: 'card-author', elem: 'aside' },
      mods: { circle: true },
      url: 'http://preprod.artdoc.media/upload/resize/' + node._image_id + '/' + node._size + '.jpg'
    }
  } ),

  appendContent()( ( node, ctx ) => {
    return  {
      elem: 'content',
      content: [
        {
          elem: 'header',
          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
          content: [
            node._name

          ]
        },
        ctx.content
      ]
    }
  })

)
