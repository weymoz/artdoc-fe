block('image')(

  match( ( node, ctx ) => ctx.width && ctx.height )(

    def()( ( node, ctx ) => {
      ctx.url = '//preprod.artdoc.media/upload/resize/' + ctx.url + '/' + ctx.width + 'x' + ctx.height + '.jpg';
      delete ctx.height;

      return applyNext( ctx )
    } )
  )

);