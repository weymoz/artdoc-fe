block('slider').js()( true )

block('slider')(
  addJs()( ( node, ctx ) => {
    return {
      pageCount: ctx.content.length,
      currentPage: 0
    }
  } ),

  content()( ( node, ctx ) => {
    return [
      {
        elem: 'view',
        content: [
          {
            block: 'button',
            mods: {
              disabled: true,
              revert: true
            },
            mix: { block: 'slider', elem: 'prev' }
          },
          ctx.content && {
            elem: 'content',
            content: ctx.content.map( (page, index) => {
              return {
                elem: 'page',
                elemMods: {
                  visible: !index
                },
                content: page
              }
            })
          },
          {
            block: 'button',
            mix: { block: 'slider', elem: 'next' }
          }
        ]
      },
      ctx.content && {
         elem: 'pagination',
         content: ctx.content.map( (page, index) => {
           return {
             elem: 'page-item',
             elemMods: {
               active: !index
             },
             js: { index: index }
           }
         })
       }
    ]
  })
)

