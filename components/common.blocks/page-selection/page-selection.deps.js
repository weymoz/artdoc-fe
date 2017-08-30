({
  shouldDeps: [
    {
      block: 'page',
      mods: {
        view: 'page-selection'
      }
    },
    {
      block: 'breadcrumbs'
    },
    'club-footer',
    'section',
    {
      block: 'card-selection',
      mods: {
        view: [ 'detail' ],
        theme: '*'
      }
    }
  ]
})
