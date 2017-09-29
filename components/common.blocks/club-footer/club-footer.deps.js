[{
  shouldDeps: [
    {
      mods: { theme: '*' },
      elems: [
        'title',
        'party',
        'maker',
        'partners'
      ]
    },
    { block: 'form', mods: { view: 'auth' } },
    { block: 'image' },
    { block: 'paragrapgh' }
  ]
},{
  elem: 'title',
  mustDeps: [
    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold' } },
  ],
  shouldDeps: [
    { block: 'heading', mods: { caps: true, size: 'xs' } },
  ]
}]
