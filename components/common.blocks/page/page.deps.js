({
  mustDeps: [
    { block: 'font' },
    'i18n'
  ],
  shouldDeps: [
    {
      mods: { view: '*' },
      elems: [ 'title' ]
    },
    { block: 'header' },
    { block: 'footer' }
  ]
})
