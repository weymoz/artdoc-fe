({
  mustDeps: [
    { block: 'font' }
  ],
  shouldDeps: [
    {
      mods: { view: ['404', '500'] },
      elems: [ 'title' ]
    },
    { block: 'header' },
    { block: 'footer' }
  ]
})
