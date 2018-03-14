block('card-ticket').elem('user-date')(

  content()( ( node, ctx ) => {

    // console.log(node._time_gmt3);

    let format;
    if (node.mods.view === 'order'){
      format = '[<div class="card-ticket__user-date">' + node.reapply([
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
    } else if (node.mods.view === 'ticket') {
      format = '[<div class="card-ticket__user-date">' + node.reapply([
        {
          block: node.block,
          elem: 'day',
          content: ']DD['
        },
        {
          block: node.block,
          elem: 'flex-column',
          content: [
            {
              block: node.block,
              elem: 'month',
              content: ']MMMM[ '
            },
            {
              block: node.block,
              elem: 'weekday',
              content: '] dd['
            }
          ]
        }
      ]) + '</div>]'
    } else {
      format = 'DD MMMM'
    }

    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        locale: node._lang,
        format: format,
        content: node._time_gmt3
      },
      ctx.append
    ]
  })

)
