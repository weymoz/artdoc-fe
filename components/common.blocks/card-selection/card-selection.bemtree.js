block('card-selection')(

  match( ( node, ctx ) => !ctx.selection ).def()( '' ),

  def()( ( node, ctx ) => {
    const _selection = ctx.selection;
    _selection.image = _selection.image ? '//preprod.artdoc.media' + _selection.image.path : 'http://via.placeholder.com/840x472';
    _selection.url = _selection.code ? '/selection/' + _selection.code : null;

    return applyNext();
  })

);
