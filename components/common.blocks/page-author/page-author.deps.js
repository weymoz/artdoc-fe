({
  mustDeps: 'i18n',
  shouldDeps: [
    { block: 'card-author', mods: {view: 'detail'} },
    { block: 'card-movie', mods: { view: ['list', 'grid'] } },
    { block: 'club-footer' }
  ]
})
