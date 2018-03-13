[{
  mustDeps: 'i18n',
  shouldDeps: [
    {
      elem: [
        'title',
        'party',
        'maker',
        'partners'
      ]
    },
    { block: 'breadcrumbs' },
    { block: 'paragraph' },
    { block: 'link' },
    { block: 'button', mods: { width: 'available', type: 'link', } },
    { block: 'list', mods: { type: 'unstyled', view: 'club-performers' } }
  ]
}]
