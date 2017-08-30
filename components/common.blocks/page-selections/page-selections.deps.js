({
    shouldDeps: [
      {
        block: 'page',
        mods: {
          view: 'page-selections'
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
          view: [ 'selections' ],
          theme: '*'
        }
      },
      {
        block: 'font',
        mods: {
          family: 'helvetica-condensed',
          loaded: true
        }
      }
    ]
})
