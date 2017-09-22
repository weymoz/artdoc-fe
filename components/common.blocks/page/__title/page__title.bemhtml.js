block('page').elem('title')(
  addMix()([
    { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } }
  ]),

  elemMod('size', 'xxl')(
    tag()('h1')
  ),

  elemMod('size', 'xl')(
    tag()('h2')
  ),

  elemMod('size', 'l')(
    tag()('h3')
  ),

  elemMod('size', 'm')(
    tag()('h4')
  ),

  elemMod('size', 's')(
    tag()('h5')
  ),

  elemMod('size', 'xs')(
    tag()('h6')
  )
)
