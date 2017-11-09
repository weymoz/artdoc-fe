block('image')(

  match( ( node, ctx ) => typeof ctx.content !== 'undefined' )(
    addAttrs()( ( node, ctx ) => {
      return {
        style: 'background-image: url(' + ctx.url + ')'
      }
    })
  )

);
