block( 'card-selection' ).elem( 'name' )(

  match( node => !node._name ).def()(''),

  tag()('h2'),

  addMix()({ block: 'font', mods: { family: 'helvetica-bold', loaded: true } }),

  content()( node => node._name )

  // match( node => node._url ).content()( node => {
  //   return {
  //     block: 'link',
  //     mods: {
  //       view: 'text'
  //     },
  //     // url: node._url,
  //     content: node._name
  //   }
  // } )
)
