block('image')(

  match( ( node, ctx ) => ctx.width && ctx.height ).def()( ( node, ctx ) => {
    return applyNext( {
      'ctx.url': '//artdoc.media/upload/resize/' + ctx.url + '/' + ctx.width + 'x' + ctx.height + '.jpg'
    } );
  } ),

  match( ( node, ctx ) => typeof ctx.content !== 'undefined' )(
    addAttrs()( ( node, ctx ) => {
      return {
        style: 'background-image: url(' + ctx.url + ')'
      }
    })
  )

);
