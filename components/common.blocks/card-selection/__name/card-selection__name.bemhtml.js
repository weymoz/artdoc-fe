block( 'card-selection' ).elem( 'name' )(
  match( node => !node._name ).def()(''),
  addMix()({ block: 'font', mods: { family: 'helvetica-bold', loaded: true } }),
  content()( node => node._name )
)