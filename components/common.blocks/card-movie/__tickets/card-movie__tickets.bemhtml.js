block('card-movie').elem('tickets')(
  addMix()( { block: 'page', elem: 'section' } ),
  match( node => node.api && node.api.movie ).content()( node => {
    return {
      block: 'ticket-case',
      mix: { block: 'page', elem: 'content' },
      movie: node.api.movie
    }
  })
)
