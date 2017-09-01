block('card-movie').elem('discussion')(

  match( node => (node._discuss_preview || node._discuss_link) && node.mods.view === 'play' ).content()( node => {
    return [
      {
        block: 'paragraph',
        content: node._discuss_preview,
      },
      { tag: 'br' },
      {
        block: 'button',
        mods: {
          type: 'link',
          width: 'available',
          theme: 'artdoc-dark'
        },
        url: node._discuss_link,
        text: 'Перейти к обсуждению'
      }
    ]
  })

)
