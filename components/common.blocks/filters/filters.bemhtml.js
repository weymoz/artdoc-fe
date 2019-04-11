block('filters')(
  match((node, ctx) => !ctx.data).def()(''),

  def()((node, ctx) => {
    node._api = Object.assign({}, ctx.data);
    node._lang = ctx.lang;
    node._currency = ctx.currency;
    return applyNext();
  }),

  addJs()(true),

  addMods()(node => {
    return { result: node._api.pagination.view || 'list' };
  }),

  content()(() => {
    return [
      { elem: 'header' }, // header with actions
      { elem: 'separator-line' },
      { elem: 'form' }, // filter's form
      { elem: 'params' }, // sorting and view params
      { elem: 'content' }, // search result
      { elem: 'footer' } // pagination
    ];
  }),

  elem('header').match(node => node._api)(
    addMix()({ block: 'page', elem: 'content' }),
    content()([{ elem: 'title' }, { elem: 'actions' }])
  ),

  elem('title')(
    addMix()({ block: 'heading', mods: { size: 'xl' } }),
    content()(node => [node._api.title, { elem: 'result-count' }])
  ),

  elem('result-count')(content()(node => node._api.pagination.total_count)),

  elem('actions')(
    content()([{ elem: 'count' }, { elem: 'reset' }, { elem: 'toggle' }])
  ),

  elem('toggle').replace()(node => {
    return {
      block: 'button',
      mods: {
        togglable: 'check',
        size: 'l',
        theme: 'artdoc-dark'
      },
      mix: { block: node.block, elem: node.elem },
      text: node._lang === 'en' ? 'Filters' : 'Фильтры'
    };
  }),

  elem('form').match(node => node._api.filters)(
    replace()(node => {
      return {
        block: 'page',
        elem: 'section',
        mix: { block: node.block, elem: node.elem },
        content: {
          elem: 'content',
          content: [
            { block: node.block, elem: 'close' },
            {
              block: 'form',
              mods: { view: node.block },
              content: node._api.fields
            }
          ]
        }
      };
    })
  ),

  elem('params')(
    addMix()({ block: 'page', elem: 'content' }),
    content()(node => [
      {
        elem: 'sort-title',
        content: node._lang === 'en' ? 'Sort by:' : 'Показывать сначала:'
      },
      { elem: 'sort' },
      { elem: 'view' }
    ])
  ),

  elem('sort')(
    replace()(node => {
      return {
        block: 'radio-group',
        mods: { type: 'line', size: 's' },
        mix: { block: node.block, elem: node.elem },
        val: node._api.pagination.sort || '-rating',
        name: 'sort',
        options: [
          {
            val: '-rating',
            text: node._lang === 'en' ? 'rating' : 'с высоким рейтингом'
          },
          {
            val: '-year',
            text: node._lang === 'en' ? 'from new to old' : 'сначала новые'
          },
          {
            val: 'year',
            text: node._lang === 'en' ? 'from old to new' : 'сначала старые'
          },
          {
            val: 'alphabetical',
            text: node._lang === 'en' ? 'from A to Z' : 'от А до Я'
          },
          {
            val: '-alphabetical',
            text: node._lang === 'en' ? 'from Z to A' : 'от Я до А'
          },
        ]
      };
    })
  ),

  elem('view')(
    replace()(node => {
      return {
        block: 'radio-group',
        mods: {
          type: 'button',
          theme: 'artdoc-dark'
        },
        mix: { block: node.block, elem: node.elem },
        val: node._api.pagination.view || 'grid',
        name: 'view',
        options: [
          {
            val: 'grid',
            text: {
              block: 'icon',
              mods: {
                symbol: 'view-grid',
                size: 's'
              }
            }
          },
          {
            val: 'list',
            text: {
              block: 'icon',
              mods: {
                symbol: 'view-list',
                size: 's'
              }
            }
          }
        ]
      };
    })
  ),

  elem('content').match(node => node._api.api)(
    addMix()({ block: 'page', elem: 'content' }),

    content()(node => {
      return node._api.api.map(movie => {
        return {
          block: 'card-movie',
          mods: { view: node._api.pagination.view || 'grid' },
          mix: { block: 'filters', elem: 'result-item' },
          movie: movie,
          lang: node._lang,
          currency: node._currency
        };
      });
    })
  ),

  elem('footer').match(node => node._api.pagination)(
    addMix()({ block: 'page', elem: 'content', elemMods: { gap: 'bottom' } }),
    content()(node => {
      return {
        block: 'pagination',
        mix: { block: 'page', elem: 'content' },
        params: node._api.pagination
      };
    })
  )
);
