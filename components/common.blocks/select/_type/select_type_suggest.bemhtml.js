block('select').mod('type', 'suggest')(
  elem('menu').def()( node => {
    return [
      node._optionIds.length > 20 ? applyCtx({
        elem: 'header',
        content: {
          block: 'input',
          mods: {
            type: 'suggest',
            width: 'available',
            size: node.mods.size,
            theme: 'artdoc'
          },
          placeholder: node._select.text
        }
      }) : '',
      applyNext()
    ].join('')
  })
)