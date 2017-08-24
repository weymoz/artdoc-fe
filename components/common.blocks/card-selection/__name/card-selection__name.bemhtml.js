block( 'card-selection' ).elem( 'name' )(
  match( function () { return !this._name } ).def()(''),
  tag()('h2'),
  content()( ( node, ctx ) => {
    return node._name
  } ),
  match( ( node, ctx ) => node._url ).content()( ( node, ctx ) => {
    return {
      block: 'link',
      mods: {
        view: 'text'
      },
      url: node._url,
      content: node._name
    }
  } )
);
