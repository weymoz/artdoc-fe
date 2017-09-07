block('card-movie').elem('awards')(

  match( node => node._fests && node._nominations ).content()( node => {
    let fests = {};
    node._fests.map( fest => {
      let name = '';
      switch ( fest.name ) {
        case 'Артдокфест':
          name = 'artdocfest';
          break;
        case 'Премия Лавр':
          name = 'lavr';
          break;
        default:
          name = 'unknown';
          break;
      }
      fests[ name ] = fests[ name ] || {};
      fests[ name ][ fest.year ] = fest;
      fests[ name ][ fest.year ].nominations = node._nominations.filter( nomination => nomination.fest_id === fest.id )
      return true;
    } )
    // console.log( '' );
    // console.log( fests );
    // console.log( '' );
    // console.log( node._name + ': ' + node._fests.map( fest => fest.name + ' (' + fest.year + ')' ).join(', ') );
  })

)
