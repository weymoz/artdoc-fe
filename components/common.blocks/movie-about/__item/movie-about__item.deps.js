[{
  mods: { section: 'authors' },
  shouldDeps: [
    {
      block: 'image',
      mods: {
        circle: true
      }
    },
    {
      block: 'card-author'
    }
  ]
},
{
  mods: { section: 'tags' },
  shouldDeps: [
    {
      block: 'link',
      mods: {
        view: 'tag'
      }
    }
  ]
}]