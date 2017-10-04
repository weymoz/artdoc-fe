block('card-movie').elem('list')(

  replace()( ( node, ctx ) => {
    let items = ctx.content.map( item => {
      return applyCtx( node.extend(
        item,
        {
          tag: 'li',
          mix: { block: 'list', elem: 'item' }
        }
      ) );
    } );

    return {
      block: 'list',
      mix: [
        { block: 'card-movie', elem: 'list' },
        node.elemMods.delimiter === 'vertical'
          ? { block: 'font', mods: { family: 'pt-mono', loaded: true } }
          : ''
      ],
      mods: node.extend(
        { type: 'inline', size: 's', theme: node.mods.theme },
        ctx.elemMods
      ),
      content: {
        html: items.join('')
      }
    }
  })

)
