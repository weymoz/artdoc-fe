block('card-author')(
  match( ( node, ctx ) => !ctx.author ).def()(''),

  match( ( node, ctx ) => ctx.author ).def()( ( node, ctx ) => {
    Object.keys( ctx.author ).map( key => {
      node[ '_' + key ] = ctx.author[ key ];
      return true;
    } );
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
      url: 'http://dev.artdoc.media/upload/resize/' + node._image_id + '/84x84.jpg'
    }
  } ),

  appendContent()( node => {
    return  {
      elem: 'content',
      content: node._name
    }
  })
)