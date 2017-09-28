block('heading')(
  mod('size', 'xl')(
    tag()('h1')
  ),

  mod('size', 'l')(
    tag()('h2'),
    addMix()( { block: 'font', mods: { family: 'helvetica-condenced-bold' } } )
  ),

  mod('size', 'm')(
    tag()('h3')
  ),

  mod('size', 's')(
    tag()('h4')
  ),

  mod('size', 'xs')(
    tag()('h5')
  ),

  mod('size', 'xs')(
    tag()('h5')
  )
)