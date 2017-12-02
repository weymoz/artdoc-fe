block('image').mod('has-resize', true)(
  match( ( node, ctx ) => ctx.width && ctx.height ).def()( ( node, ctx ) => {
    return applyNext( {
      'ctx.url': '//artdoc.media/upload/resize/' + ctx.url + '/' + ctx.width + 'x' + ctx.height + '.jpg'
    } );
  } )
)