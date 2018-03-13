block('card-movie').elem('discussion')(

  match( node => !node._discuss_preview && !node._discuss_link ).def()(''),

  content()( (node) => {
      return [{
        html: node._lang === 'en' ? 'Film discussion with&nbsp;author and&nbsp;viewers' : 'Обсуждение фильма с&nbsp;автором и&nbsp;зрителями'
      }]
  }),

  match( node => node.mods.view === 'promo' ).content()( node => {
    return [
      {
        elem: 'tooltip',
        elemMods: { promo: true },
        content: node._discuss_preview
      },
      {
        html: node._lang === 'en' ? 'Film discussion with&nbsp;author and&nbsp;viewers' : 'Обсуждение фильма с&nbsp;автором и&nbsp;зрителями'
      }
    ]
  }),

  match( node => node.mods.view === 'schedule' ).content()( node => {
    return [
      {
        elem: 'tooltip',
        elemMods: { schedule: true },
        content: node._discuss_preview
      },
      {
        html: node._lang === 'en' ? 'Film discussion with&nbsp;author and&nbsp;viewers' : 'Обсуждение фильма с&nbsp;автором и&nbsp;зрителями'
      }
    ]
  }),

  match( node => node.mods.view === 'play' ).content()( node => {
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
        text: node._lang === 'en' ? 'To discussion' : 'Перейти к обсуждению'
      }
    ]
  })
)
