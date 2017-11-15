block('search')(
  match( ( node, ctx ) => !ctx.result ).def()(''),

  match( ( node, ctx ) => ctx.result ).def()( ( node, ctx ) => {
    node._api = Object.assign( {}, ctx.result );
    node._api.query = ctx.query;
    return applyNext();
  } )
)