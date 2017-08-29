block('card-ticket').elem('user-date')(

  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),

  content()( node => {
    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: 'DD MMMM',
        content: node._time_gmt3
      },
      ( new Date( node._time_gmt3 * 1000 ).getDate() === new Date().getDate() + 1 ? ', завтра' : '' )
    ]
  })
)
