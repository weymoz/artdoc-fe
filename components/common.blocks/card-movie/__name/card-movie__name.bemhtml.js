block( 'card-movie' ).elem( 'name' )(

  match( node => !node._name ).def()(''),

  addMix()( ( node, ctx ) => {
    return [
      { block: 'heading', mods: ctx.elemMods },
      { block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } }
    ]
  } ),

  content()( node => node._name ),

  elemMod('link', true).match( node => node._url ).content()( node => {
    return {
      block: 'link',
      mods: { view: 'text' },
      url: node._url,
      content: node._name
    }
  } )
)
