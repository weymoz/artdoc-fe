block('footer')(
  match( node => node.data && node.data.meta && node.data.meta.social ).def()( node => {
    return applyNext( { 'ctx.social': node.data.meta.social } );
  })
)