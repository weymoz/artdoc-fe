({
    shouldDeps: [
      {
        block: 'page',
        mods: {
          view: 'page-schedule'
        }
      },
      {
        block: 'breadcrumbs'
      },
      'club-footer',
      'section',
      {
        block: 'card-movie',
        mods: {
          view: [ 'schedule', 'promo' ]
        }
      }
    ]
})
