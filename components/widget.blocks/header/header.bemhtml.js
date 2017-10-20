block('header')(
  content()( ( node ) => {
    return {
      block: 'button',
      mods: {
        view: 'plain',
        size: 'xxl'
      },
      mix: { block: node.block, elem: 'back', js: true },
      text: '← Назад'
    }
  })
)