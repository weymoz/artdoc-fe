({
    shouldDeps: [
      {
        elems: [
          'item',
          'title'
        ],
        mods: { theme: '*' }
      },
      {
        block: 'list',
        mods: { type: 'description' },
        elems: [
          {
            elem: 'term',
            mods: {
              movie: [
                'actioncities',
                'actioncountries',
                'actionperiods',
                'authors',
                'categories',
                'composer',
                'countries',
                'director',
                'duration',
                'fin-type',
                'genres',
                'language',
                'operator',
                'producer',
                'screenwriter',
                'sound_producer',
                'studio',
                'subs',
                'tags',
                'tvpg',
                'year',
              ]
            }
          }
        ]
      },
    ]
})