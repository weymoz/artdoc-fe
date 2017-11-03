block('movie-about').elem('item')(

  match( ( node, ctx ) => ctx.elemMods.section === 'info' || ctx.elemMods.section === 'crew' ).replace()( ( node, ctx ) => {
    return [
      {
        block: 'list',
        mods: {
          type: 'description',
          size: 's'
        },
        mix: [
          { block: node.block, elem: node.elem, elemMods: node.elemMods },
          { block: 'font', mods: { family: 'pt-mono', loaded: true } }
        ],
        content: ctx.data.map( item => {
          if ( ctx.movie.hasOwnProperty( item ) && ctx.movie[ item ] && ctx.movie[ item ].length ) {
            return [
              {
                elem: 'item',
                content: [
                  {
                    elem: 'term',
                    elemMods: {
                      movie: item.replace(/_/g, '-')
                    }
                  },
                  {
                    elem: 'definition',
                    elemMods: {
                      align: 'start'
                    },
                    content: Array.isArray( ctx.movie[ item ] )
                      ? ctx.movie[ item ].map( line => line.name ).join(', ')
                      : ctx.movie[ item ]
                  }
                ]
              }
            ]
          }
          return false;
        } )
      }
    ]
  } ),

  elemMod('section', 'authors')(
    addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),
    content()( ( node, ctx ) => {
      return ctx.movie.authors.map( author => {
        return {
          block: 'card-author',
          author: author
        }
      } )
    } )
  ),

  elemMod('section', 'tags').content()( ( node, ctx ) => {
    return ctx.movie.tags.split(', ').map( tag => {
      return {
        block: 'link',
        mix: { block: 'text', mods: { bold: true } },
        mods: {
          view: 'tag',
          size: 'xs',
          theme: 'artdoc-dark'
        },
        url: '/movie/tag-' + tag,
        content: tag
      }
    } )
  } ),

  elemMod('section', 'awards').content()( ( node, ctx ) => {
    // console.log( ctx.movie.fests );
    // console.log( ctx.movie.nominations );
    let fests = {};
    ctx.movie.fests.map( fest => {
      let name = '';
      switch ( fest.name ) {
        case 'Артдокфест':
          name = 'artdocfest';
          break;
        case 'Премия Лавр':
          name = 'lavr';
          break;
        case 'Призер Международных фестивалей':
          name = 'world';
          break;
        case 'Призер Российских фестивалей':
          name = 'russian';
          break;
        default:
          break;
      }

      fests[ name ] = ctx.movie.nominations.filter( nomination => nomination.fest_id === fest.id );
      return true;
    } )

    console.log('');
    console.log( fests );
    console.log('');

    return Object.keys( fests ).sort().map( name => {
      return {
        elem: 'award',
        elemMod: { award: name },
        content: [
          {
            elem: 'award-icon',
            elemMods: { type: name }
          },
          {
            block: 'heading',
            mods: { align: 'center', size: 'xs' },
            content: fests[ name ][0].row_data.split('#')[0]
          },
          { tag: 'br' },
          fests[ name ].map( fest => {
            return {
              block: 'paragraph',
              mods: { align: 'center' },
              content: fest.stage
            }
          } )
        ]
      }
    } )
  } )
)