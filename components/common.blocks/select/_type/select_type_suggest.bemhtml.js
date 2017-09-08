block('select').mod('type', 'suggest')(
  elem('menu').def()( node => {
    return [
      applyCtx({
        block: 'input',
        mix: { block: node.block, elem: 'header' },
        mods: {
          width: 'available',
          size: node.mods.size,
          theme: 'islands'
        }
      }),
      applyNext(),
      applyCtx({
        block: 'button',
        mix: { block: node.block, elem: 'footer' },
        mods: {
          width: 'available',
          size: node.mods.size,
          theme: node.mods.theme
        },
        text: 'Применить'
      })
    ].join('')
  })
)