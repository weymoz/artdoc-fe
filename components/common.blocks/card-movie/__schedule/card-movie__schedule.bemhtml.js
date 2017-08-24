block( 'card-movie' ).elem( 'schedule' )(
  match( node => { return !node._schedule || !node._schedule.length } ).def()( '' ),
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
  tag()('time'),
  content()( ( node, ctx ) => {
    return [
      {
        elem: 'schedule-day',
        content: ctx.content
      },
      {
        elem: 'schedule-month',
        content: ctx.content
      }
    ]
  } ),
  match( node => { return node._schedule && node._schedule.length } ).def()( node => {
    return [
      applyNext( { 'ctx.content': node._schedule[ 0 ] } ),
      node._schedule.length > 1
        ? applyNext( { 'ctx.content': node._schedule[ node._schedule.length - 1 ] } )
        : ''
    ].join('');
  } )
)
