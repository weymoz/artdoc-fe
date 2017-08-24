block( 'card-selection' ).elem( 'counter' )(
  match( function () { return !this._name } ).def()(''),
  content()( ( node, ctx ) => {
    return node._name
  } ),
  match( ( node, ctx ) => node._url ).content()( ( node, ctx ) => {
    return [
      {
        block: 'selection-counter',
        content: node._movies.length
      },
      {
        block: 'selection-counter_adds',
        content: [
          {
            block: 'text',
            mods: { plural: true },
            content: {
              number: node._movies.length,
              one: 'фильм',
              two: 'фильма',
              five: 'фильмов'
            }
          }
        ]
      }
    ]
  } )
);
