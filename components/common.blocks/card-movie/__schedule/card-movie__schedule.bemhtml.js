block( 'card-movie' ).elem( 'schedule' )(

  match( node => { return !node._schedules || !node._schedules.length } ).def()( '' ),

  tag()('time'),

  addAttrs()( ( node, ctx ) => {
    return {
      title: applyCtx( {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: 'LL',
        content: ctx.content
      } ),
      datetime: applyCtx( {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: '',
        content: ctx.content
      } )
    }
  } ),

  content()( ( node, ctx ) => {
    const template = node.reapply([
      {
        block: node.block,
        elem: 'schedule-day',
        content: ']['+ ctx.prefix + ']D['
      },
      {
        block: node.block,
        elem: 'schedule-month',
        content: ']MMMM['
      },
      ctx['show-week-day'] && {
        block: node.block,
        elem: 'schedule-week-day',
        content: ']dd['
      }      
    ]);

    return [
      {
        block: 'text',
        mods: { format: 'datetime' },
        format: '[' + template + ']',
        content: ctx.content
      },
    ]
  } ),

  match( node => { return node._schedules && node._schedules.length } ).def()( node => {
    const isPeriod = node._schedules.length > 1;
    const prefix = isPeriod ? 'c ' : '';
    return [
      applyNext( {
        elemMods: { period: isPeriod },
        ctx: {
          prefix: prefix,
          'show-week-day': !isPeriod,
          content: node._schedules[ 0 ].date
        }
      } ),
      isPeriod
        ? applyNext( {
          elemMods: { period: true },
          ctx: {
            prefix: 'по ',
            content: node._schedules[ node._schedules.length - 1 ].date
          }
        } )
        : ''
    ].join('');
  } )

)
