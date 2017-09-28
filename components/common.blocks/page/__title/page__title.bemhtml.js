block('page').elem('title')(
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
  ),

  elemMod('view', 'bold')(
    addMix()( { block: 'font', mods: { family: 'helvetica-bold', loaded: true } } )
  ),

  elemMod('view', 'condensed-bold')(
    addMix()( { block: 'font', mods: { family: 'helvetica-condensed-bold', loaded: true } } )
  )
)
