block( 'card-movie' ).elem( 'tvpg' )(

  match( node => !node._tvpg ).def()(''),

  addAttrs()( { title: 'Рейтинг' } ),

  addMix()({ block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } }),

  content()( node => node._tvpg )

)
