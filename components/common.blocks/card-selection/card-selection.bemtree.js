block('card-selection')(

  match( ( node, ctx ) => !ctx.selection ).def()( '' ),

  def()( ( node, ctx ) => {
    const _selection = ctx.selection;
    _selection.url = _selection.code ? '/selection/' + _selection.code : null;

    return applyNext();
  })

);
