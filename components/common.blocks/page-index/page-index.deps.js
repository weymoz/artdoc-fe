({
  shouldDeps: [
    {
      mods: { theme: '*' },
      elem: ['title']
    },
    {
      block: 'page',
      mods: {
        view: 'page-index'
      }
    },
    {
      block: 'font',
      mods: {
        loaded: true,
        family: 'helvetica-condensed'
      }
    },
    {
      block: 'card-selection',
      mods: {
        view: [ 'selections' ],
        theme: 'artdoc'
      }
    },
    'slider',
    'news',
    'club-footer',
    {
      block: 'card-poster'
    },
    {
      block: 'button',
      mods: {
        type: 'link',
        theme: 'artdoc'
      }
    }
  ]
})
