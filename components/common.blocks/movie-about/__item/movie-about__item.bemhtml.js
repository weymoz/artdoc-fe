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
          mods: { size: 'l' },
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
        url: '/' + node._lang + '/movie/tag-' + tag,
        content: tag
      }
    } )
  } ),

  elemMod('section', 'awards').content()( ( node, ctx ) => {
    let fests = {};
    ctx.movie.fests.map( fest => {
      let name;
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

      fests[ name ] = {
        year: fest.year,
        nominations: ctx.movie.nominations.filter( nomination => nomination.fest_id === fest.id )
      };

      return true;
    } )

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
            mix: { block: node.block, elem: 'award-title' },
            mods: { align: 'center', size: 's' },
            content: fests[ name ].nominations[0].row_data.split('#')[0] + ' ' + fests[ name ].year
          },
          fests[ name ].nominations.map( fest => {
            return [
              fest.stage && {
                block: 'paragraph',
                mods: { align: 'center', size: 's' },
                content: fest.stage
              },
              fest.comment && {
                block: 'paragraph',
                mods: { align: 'center', size: 's' },
                content: fest.comment
              }
            ]
          } )
        ]
      }
    } )
  } )
)
