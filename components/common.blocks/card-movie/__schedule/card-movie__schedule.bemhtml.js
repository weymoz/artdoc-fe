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
      node.elemMods.period && {
        block: node.block,
        elem: 'schedule-week-day',
        content: ']dd['
      }      
    ]);

    console.log( ctx.content );

    return {
      block: 'text',
      mods: { format: 'datetime' },
      format: '[' + template + ']',
      content: ctx.content
    }
  } )
)
