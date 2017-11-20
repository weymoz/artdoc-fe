block('ticket-case')(
  addJs()(true),

  addAttrs()({ id: 'schedule' }),

  elem('title').addMix()( { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } } )
)