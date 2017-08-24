block('card-movie').elem('list')(
  replace()( ( node, ctx ) => {
    let items = ctx.content.map( item => {
      return applyCtx( node.extend(
        item,
        {
          tag: 'li',
          mix: [{ block: 'list', elem: 'item' }, { block: 'font', mods: { family: 'pt-mono', loaded: true } }]
        }
      ) );
    } );

    return {
      block: 'list',
      tag: 'div',
      mix: { block: node.block, elem: node.elem },
      mods: node.extend( {
        type: 'inline',
        theme: node.mods.theme
      }, ctx.elemMods ),
      content: {
        html: items.join('')
      }
    }
  })
)
