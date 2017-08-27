[{
  shouldDeps: [
    { mods: { theme: '*' },
      elems: [
      'preview',
      'control'
      ] },
    { block: 'link' },
    {
      block: 'button',
      mods: {
        theme: 'artdoc-dark'
      }
    },
    {
      block: 'card-movie',
      mods: {
        view: [
          'slide',
          'short',
        ]
      }
    }
  ]
},
{
  tech: 'js',
  shouldDeps: [
    {
      tech: 'bemhtml',
      block: 'card-movie',
      mods: {
        view: [
          'slide'
        ]
      },
    }
  ]
}
]
