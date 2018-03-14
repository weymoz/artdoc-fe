block('card-ticket').mod('view', 'movie')(

  addMods()({ status: 'disabled' }),

  match( ( node, ctx ) => ctx.ticket.tickets_left && ( ( ctx.ticket.time_gmt3 * 1000 ) > Date.now() ) )(

    tag()('a'),

    addMix()( { block: 'link'} ),

    addAttrs()( ( node, ctx ) => {
      return {
        href: '?code=' + ctx.ticket.code
      }
    } ),

    addMods()( { status: 'active' } )

  ),

  match( ( node, ctx ) => ctx.ticket.tickets_left < 10 && ( ( ctx.ticket.time_gmt3 * 1000 ) > Date.now() ) ).addMods()({ status: 'less' }),

  content()( node => {

    let tomorrow = node._lang === 'en' ? ', tomorrow' : ', завтра'

    return [
      {
        elem: 'header',
        mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true }  },
        content: [
          { elem: 'room' },
          { elem: 'city' },
        ]
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'user-date',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true }  },
            append: ( node.position > 3 && new Date( node._time_gmt3 * 1000 ).getDate() === new Date().getDate() + 1 ? tomorrow : '' ),
          },
          { elem: 'user-time' }
        ]
      },
      {
        elem: 'footer',
        content: { elem: 'buy' }
      },
      {
        elem: 'footer',
        content: { elem: 'left' }
      }
    ]
  })
)
