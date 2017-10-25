block('page')(

  def()( node => {
    return applyNext( { user: node.ctx.user } );
  } ),

  js()(true),

  addMix()( { block: 'font', mods: { family: 'helvetica-neue', loaded: true } } )

);
