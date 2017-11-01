block('search').elem('title')(

  replace()( ( node, ctx ) => {
    return {
      block: 'page',
      elem: 'title',
      elemMods: { view: 'condensed-bold', size: 'm' },
      mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
      content: ctx.content
    }
  } )

)