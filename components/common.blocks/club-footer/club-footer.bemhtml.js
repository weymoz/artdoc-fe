block('club-footer')(
  addMix()({ block: 'page', elem: 'content' }),
  wrap()( ( node, ctx ) => {
    return {
      block: 'page',
      elem: 'section',
      content: ctx
    }
  } )
)
