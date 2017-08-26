({
  mustDeps: [
    { block: 'font' }
  ],
  shouldDeps: [
    {
      mods: {
        view: ['404'],
        theme: '*'
      },
      elems: [ 'title' ]
    },
    { block: 'header' },
    { block: 'footer' },
    {
      block: 'font',
      mods: {
          family: 'helvetica-condensed',
          loaded: true
      }
    }
  ]
})
