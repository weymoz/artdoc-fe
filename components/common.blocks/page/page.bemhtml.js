block('page')(
  def()( node => {
    return applyNext( { user: node.ctx.user } );
  } ),
  addMix()( { block: 'font', mods: { family: 'helvetica-neue', loaded: true } } )
);
