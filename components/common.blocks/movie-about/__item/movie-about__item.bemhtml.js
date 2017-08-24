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
          content: [
            author.image_id && {
              block: 'image',
              mix: { block: 'card-author', elem: 'aside' },
              mods: {
                circle: true
              },
              url: 'http://dev.artdoc.media/upload/resize/' + author.image_id + '/84x84.jpg'
            },
            {
              elem: 'content',
              content: author.name
            }
          ]
        }
      } )
    } )
  ),

  elemMod('section', 'tags').content()( ( node, ctx ) => {
    return ctx.movie.tags.split(', ').map( tag => {
      return {
        block: 'link',
        mods: {
          view: 'tag',
          size: 's'
        },
        url: '/movie/tag-' + tag,
        content: tag
      }
    } )
  } )
)