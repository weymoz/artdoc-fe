({
  shouldDeps : [
    { block : 'popup', mods : { theme : 'artdoc' } },
    {
      include : false,
      mods : { switcher : 'link' },
      shouldDeps : { block : 'link', mod : 'theme', val : 'artdoc' }
    },
    {
      include : false,
      mods : { switcher : 'button' },
      shouldDeps : { block : 'button', mod : 'theme', val : 'artdoc' }
    }
  ]
})
