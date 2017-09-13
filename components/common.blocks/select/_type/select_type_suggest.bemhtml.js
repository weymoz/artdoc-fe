block('select').mod('type', 'suggest')(
  elem('menu').def()( node => {
    return [
      applyCtx({
        elem: 'header',
        content: {
          block: 'input',
          mods: {
            type: 'suggest',
            width: 'available',
            size: node.mods.size,
            theme: 'islands'
          }
        }
      }),
      applyNext(),
      applyCtx({
        elem: 'footer',
        content: {
          block: 'button',
          mods: {
            width: 'available',
            size: node.mods.size,
            theme: 'artdoc'
          },
          text: 'Применить'
        }
      })
    ].join('')
  })
)