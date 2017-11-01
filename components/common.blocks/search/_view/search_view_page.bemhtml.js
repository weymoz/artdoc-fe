block('search').mod('view', 'page')(
  content()( ( node, ctx ) => {
    const total = Object.keys( ctx.result ).reduce( ( sum, current ) => sum + ctx.result[ current ].length, 0 );
    return [
      {
        block: 'page',
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'xl' },
        mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
        content: ctx.query && total
          ? 'Все результаты поиска по запросу «' + ctx.query + '»'
          : 'По вашему запросу ничего не найдено'
      },
      [ 'movie', 'tag' ].map( elem => {
        return {
          elem: elem
        }
      } )
    ]
  } )
)