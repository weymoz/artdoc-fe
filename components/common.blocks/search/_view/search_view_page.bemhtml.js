block('search').mod('view', 'page')(
  content()( ( node, ctx ) => {
    const total = Object.keys( ctx.result ).reduce( ( sum, current ) => sum + ctx.result[ current ].length, 0 );

    const finded = ctx.lang === 'en' ?  'All search results for «' : 'Все результаты поиска по запросу «';
    const nothing = ctx.lang === 'en' ?  'Nothing found on your request' : 'По вашему запросу ничего не найдено';



    return [
      {
        block: 'page',
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'xl' },
        mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
        content: ctx.query && total
          ? finded + ctx.query + '»'
          : nothing
      },
      [ 'movie', 'tag' ].map( elem => {
        return {
          elem: elem,
          lang: ctx.lang,
          currency: ctx.currency
        }
      } )
    ]
  } )
)
