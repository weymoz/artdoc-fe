block('card-selection').mod('view', 'selections')(
  def()( () => {
    return applyNext( { author_image: 'm' } )
  }),

  content()( ( node, ctx ) => {
    var newMovie = ctx.selection.movies.slice();
    return [
      {
        elem: 'content',
        url: '/selection/' + node._code,
        content: [
          {
            elem: 'cover',
            width: 644,
            height: 320,
            content: [
              {
                elem: 'header',
                content: [
                  { elem: 'name' },
                  { elem: 'author' }
                ]
              },
              {
                elem: 'footer',
                content: { elem: 'counter' }
              }
            ]
          },
        ]
      },
      {
        elem: 'aside',
        content: newMovie.splice(0, 3).map( item => {
          return {
            block: 'card-movie',
            mods: { view: 'selection', theme: 'artdoc' },
            mix: { block: node.block, elem: 'item' },
            movie: item
          }
        } )
      }
     ]
  }),

  elem('name')(
    tag()('h3'),
    addMix()( node => {
      return [
        { block: 'heading', mods: { 'has-dot': true, size: 'xl', theme: node.mods.theme } }
      ]
    } )
  )
);
