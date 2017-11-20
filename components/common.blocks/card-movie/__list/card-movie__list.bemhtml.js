block('card-movie').elem('list')(

  tag()('ul'),

  addMix()( ( node, ctx ) => {
    return {
      block: 'list',
      mix: [
        { block: 'card-movie', elem: 'list' },
        node.elemMods.delimiter === 'vertical'
          ? { block: 'font', mods: { family: 'pt-mono', loaded: true } }
          : ''
      ],
      mods: Object.assign(
        {},
        { type: 'inline', size: 's', theme: node.mods.theme },
        ctx.elemMods
      )
    }
  } ),

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
