({
  shouldDeps: [
    {
      block: 'page',
      elems: [ 'title' ],
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
