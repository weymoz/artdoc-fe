oninit(function(exports, shared) {

  function isObject(item) {
    return ( item && typeof item === 'object' && !Array.isArray( item ) );
  }

  function mergeDeep ( target, source ) {
    let output = Object.assign( {}, target );

    if ( isObject( target ) && isObject( source ) ) {
      Object.keys( source ).forEach( key => {
        if ( isObject( source[ key ] ) ) {
          if ( !( key in target ) ) {
            Object.assign( output, { [ key ]: source[ key ] } );
          } else {
            output[ key ] = mergeDeep( target[ key ], source[ key ] );
          }
        } else {
          Object.assign( output, { [ key ]: source[ key ] } );
        }
      });
    }

    return output;
  }

  shared.BEMContext.prototype.mergeDeep = mergeDeep;
});

block('card-movie').mod('view', 'slide')(

  def()( ( node, ctx ) => {
    const movie = node.mergeDeep( ctx.movie, {
      cover: { width: 896 },
    } );

    return applyNext( { 'ctx.movie': movie } );
  }),

  content()( () => {
    return applyNext( { 'ctx.content': {
        elem: 'content',
        content: [
          {
            elem: 'info',
            content: [
              { elem: 'icon' },
              {
                elem: 'title',
                mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
                content: 'Сегодня в онлайн-киносеансах'
              }
            ]
          },
          { elem: 'image' },
          {
            elem: 'cover',
            content: [
              { elem: 'orig-name' },
              { elem: 'name' },
              {
                elem: 'list',
                elemMods: {
                  delimiter: 'vertical'
                },
                content: [
                  { elem: 'director' },
                  { elem: 'countries' },
                  { elem: 'year' }
                ]
              },
              { elem: 'description', elemMods: { 'short': true } },
              { elem: 'buy', elemMods: { type: 'button' } }
            ]
          },
        ]
      }
    } );
  }),

  elem('name')(
    addMix()( node => {
      return { block: 'heading', mods: { 'has-dot': true, size: 'xl', theme: node.mods.theme } }
    } )
  )
);
