({
  shouldDeps: [
    { mods: { theme: '*' } },
    { block: 'link' },
    {
      block: 'dropdown',
      mods: {
        switcher: 'link',
        'nav-menu': true
      }
    },
    {
      block: 'section'
    },
    {
      block: 'menu',
      mods: { type: 'radio', 'nav-menu': true },
      elems: [ 'item' ]
    }
  ]
})
