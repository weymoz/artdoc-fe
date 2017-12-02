var marked = require('marked');

block('filters').def()( ( node, ctx ) => {
  if ( ctx.data.api && ctx.data.api.length ) {
    ctx.data.api.forEach( movie => {
      if ( movie.offlineShow && movie.offlineShow.description ) {
        movie.offlineShow.description = marked( movie.offlineShow.description );
      }
    } )
  }
  // data from api
  let filters = node.data.filters;

  // applied filters from get:
  let userFilter = node.data.filter;

  function sortWord(a, b) {
    return a.value.localeCompare(b.value, 'ru');
  }

  function sortNumber(a, b) {
    return parseInt(a.value) > parseInt(b.value)? 1: -1;
  }

  function sortNumberDesc(a, b) {
    return parseInt(a.value) > parseInt(b.value)? -1: 1;
  }

  let filtersMap = {
    category: {
      code: 'category',
      name: 'Категории',
      skip: true,
      sort: sortWord,

    },
    full_movie: {
      code: 'full_movie',
      name: 'Только с видео',
      skip: false,

    },
    free: {
      code: 'free',
      name: 'Только бесплатные',
      skip: false,
    },
    rating: {
      name: 'Рейтинг artdoc.media',
      skip: false,
      sort: sortNumberDesc,
    },
    year: {
      name: 'Год выхода',
      skip: false,
      sort: sortNumberDesc,

    },
    country: {
      name: 'Страна производства',
      skip: false,
      sort: sortWord,
    },
    studio: {
      skip: false,
      name: 'Студия производства',
      sort: sortWord,
    },
    genre: {
      name: 'Жанры',
      skip: false,
      sort: sortWord,
    },
    period: {
      name: 'Исторический период',
      skip: false,
      sort: sortNumber,
    },
    action_country: {
      name: 'Страна действия',
      skip: false,
      sort: sortWord,
    },
    action_city: {
      name: 'Место действия',
      skip: false,
      sort: sortWord
    },
    language: {
      name: 'Язык',
      skip: false,
      sort: sortWord
    },
    subs: {
      name: 'Субтитры',
      skip: false,
      sort: sortWord
    },
    fin_type: {
      name: 'Финансирование',
      skip: false,
      sort: sortWord,
    },
    nominations: {
      name: 'Номинации',
      skip: false,
      sort: sortWord
    },
  }

  let filter_fields = filters.map(function (element) {
    if (typeof filtersMap[element.code] == 'undefined' || filtersMap[element.code].skip) {
      return [];
    }

    let d = {};
    let result = {
      block: 'form-field',
      mods: {},
      mix: { block: 'filters', elem: 'item' },
      id: element.code,
      name: element.code,
      content: []
    }

    switch (element.type) {
      case 'int':
        result.mods.type = 'select';
        d = {
          block: 'select',
          text: filtersMap[element.code].name,
          mods: {
            mode: 'check',
            type: 'suggest',
            'has-clear': true,
            size: 's',
            theme: 'artdoc-dark'
          },
          optionsMaxHeight: 320,
          options: element.values.sort(filtersMap[element.code].sort).map(function (option) {
            return {
              val: option.id ? parseInt(option.id) : option.value,
              text: option.value
            }
          })
        }

        if (typeof userFilter[element.code] != 'undefined') {
          d.val = userFilter[element.code];
        }

        result.content.push( d );
        break;

      case 'bool':
        result.mods.type = 'checkbox';
        d = {
          block: 'checkbox',
          mix: { block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true } },
          mods: {
            checked: typeof userFilter[element.code] != 'undefined' ? true : false,
            theme: 'artdoc-dark'
          },
          text: filtersMap[element.code].name,
        }

        result.content.push( d )
        break;

      default:
        return []
    }

    return result;
  });

  ctx.data.fields = filter_fields;
  return applyNext();
});
