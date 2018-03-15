({
    mustDeps: 'i18n',
    shouldDeps: [
      { block: 'card-movie', mods: { view: 'ticket' } },
      { block: 'card-ticket' , mods: { view: '*' }},
      { block: 'paragraph' },
      { block: 'club-footer' },
      { block: 'section' }
    ]
})
