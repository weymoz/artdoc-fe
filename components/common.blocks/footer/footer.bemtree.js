block('footer')(
  def()( node => {
    return applyNext( { 'ctx.social': node.data.meta.social } );
  })
)