[
  {
    shouldDeps: [
      {
        elems: [
          'buy',
          'city',
          'content',
          'footer',
          'header',
          'left',
          'room',
          'user-date',
          'user-time',
        ],
        mods: { theme: '*' }
      },
      { block: 'link' },
      { block: 'font', mods: { family: ['helvetica-neue-condensed-bold', 'pt-mono'] }  }
    ]
  },
  {
    tech: 'js',
    shouldDeps: [
      {
        tech: 'bemhtml',
        elems: [
          'buy',
          'city',
          'content',
          'footer',
          'header',
          'left',
          'room',
          'user-date',
          'user-time',
        ],
        mods: { theme: '*' }
      },
      {
        tech: 'bemhtml',
        block: 'link'
      }
    ]
  }
]
