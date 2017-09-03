block('card-ticket').elem('user-date')(

  content()( ( node, ctx ) => {
    let format = node.mods.view === 'order'
      ? '[<div class="card-ticket__user-date">' + node.reapply([
        {
          block: node.block,
          elem: 'day',
          content: ']DD['
        },
        {
          block: node.block,
          elem: 'month',
          content: ']MMMM[, ] dd['
        }
      ]) + '</div>]'
    : 'DD MMMM'

    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: format,
        content: node._time_gmt3
      },
      ctx.append
    ]
  })

)