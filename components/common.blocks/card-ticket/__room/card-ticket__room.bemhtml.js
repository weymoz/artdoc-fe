block('card-ticket').elem('room')(
  tag()('span'),
  content()( (node) => {

  let hall = node._lang === 'en' ? 'Hall&nbsp;' : 'Зал&nbsp;'

  return {
    html: hall
  }
  } )
)
