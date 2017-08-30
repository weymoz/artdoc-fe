block('card-ticket').elem('user-date')(

  match( node => node.mods.view === 'movie' ).content()( ( node, ctx ) => {
    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: 'DD MMMM',
        content: node._time_gmt3
      },
      ctx.append
    ]
  }),

  match( node => node.mods.view === 'order' ).content()( node => {
    const template = node.reapply({
      block: node.block,
      elem: node.elem,
      content: [
        {
          elem: 'day',
          content: ']DD['
        },
        {
          elem: 'month',
          content: ']MMMM[, ] dd['
        }
      ]
    });

    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: '[' + template + ']',
        content: node._time_gmt3
      },
    ]
  })

)
