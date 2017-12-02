block('card-movie').elem('list')(

  tag()('ul'),

  addMix()( node => {
    return { block: 'list', mods: Object.assign( {}, node.elemMods, { type: 'inline', size: 's' } ) }
  } ),

  match( node => node.elemMods.delimiter === 'vertical' ).addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),

  content()( ( node, ctx ) => {
    let items = ctx.content.map( item => {
      return Object.assign(
        {},
        item,
        { tag: 'li', mix: { block: 'list', elem: 'item' } }
      )
    } );
    return applyNext( { 'ctx.content': items } );
  })
)
