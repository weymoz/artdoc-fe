[{
  shouldDeps: [
    {
      elems: [
        'preview',
        'control'
      ]
    },
    { block: 'link' },
    { block: 'button' },
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
