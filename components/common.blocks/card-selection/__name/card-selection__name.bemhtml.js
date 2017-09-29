block( 'card-selection' ).elem( 'name' )(
  match( node => !node._name ).def()(''),
  addMix()({ block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } }),
  content()( node => node._name )
)