block('card-movie').elem('awards')(

  match( node => !node._fests || !node._nominations ).def()(''),

  match( node => node._fests && node._nominations ).def()( node => {
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
        // case 'Призер Международных фестивалей':
        //   name = 'world';
        //   break;
        // case 'Призер Российских фестивалей':
        //   name = 'russian';
        //   break;
        default:
          name = 'other';
          break;
      }

      fests[ name ] = node._nominations.filter( nomination => nomination.fest_id === fest.id );
      return true;
    } )

    return Object.keys( fests ).sort().map( name => {
      return applyNext( { elemMods: { type: name } } )
    } ).join('')
  })

)
