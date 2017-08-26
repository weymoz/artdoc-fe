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
    'slider'
  ]
})
