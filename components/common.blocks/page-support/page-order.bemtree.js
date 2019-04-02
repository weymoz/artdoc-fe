block('page-support')(
  replace()( () => {



    return [
      {
        elem: 'content',
        elemMods: { width: 'narrow', gap: 'bottom' },
        content: [
          {
            block: 'breadcrumbs'
          },

        ]
      }
    ];
  } )

)
