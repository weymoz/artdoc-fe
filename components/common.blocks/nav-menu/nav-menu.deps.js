({
  shouldDeps: [
    { block: 'link' },
    { block: 'section' },
    {
      block: 'dropdown',
      mods: {
        switcher: 'link',
        anchor: 'header',
        'nav-menu': true
      }
    },
    {
      block: 'menu',
      mods: { type: 'radio', 'nav-menu': true },
      elems: [ 'item' ]
    }
  ]
})
