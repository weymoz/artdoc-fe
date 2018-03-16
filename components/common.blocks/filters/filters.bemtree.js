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
      name: node.i18n('filters', 'category'),
      skip: true,
      sort: sortWord,
    },
    full_movie: {
      code: 'full_movie',
      name: ctx.data.user ? node.i18n('filters', 'user') : node.i18n('filters', 'noUser'),
      skip: false,

    },
    free: {
      code: 'free',
      name: node.i18n('filters', 'free'),
      skip: !!ctx.data.user,
    },
    rating: {
      name: node.i18n('filters', 'artdoc'),
      skip: false,
      sort: sortNumberDesc,
    },
    year: {
      name: node.i18n('filters', 'year'),
      skip: false,
      sort: sortNumberDesc,

    },
    country: {
      name: node.i18n('filters', 'produce-country'),
      skip: false,
      sort: sortWord,
    },
    studio: {
      skip: false,
      name: node.i18n('filters', 'studio'),
      sort: sortWord,
    },
    genre: {
      name: node.i18n('filters', 'genre'),
      skip: false,
      sort: sortWord,
    },
    period: {
      name: node.i18n('filters', 'history'),
      skip: false,
      sort: sortNumber,
    },
    action_country: {
      name: node.i18n('filters', 'action-country'),
      skip: false,
      sort: sortWord,
    },
    action_city: {
      name: node.i18n('filters', 'action-place'),
      skip: false,
      sort: sortWord
    },
    language: {
      name: node.i18n('filters', 'lang'),
      skip: false,
      sort: sortWord
    },
    subs: {
      name: node.i18n('filters', 'subtitles'),
      skip: false,
      sort: sortWord
    },
    fin_type: {
      name: node.i18n('filters', 'finances'),
      skip: false,
      sort: sortWord,
    },
    nominations: {
      name: node.i18n('filters', 'nominations'),
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
    case 'string':
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
            val: option.id,
            text: option.value
          }
        })
      }

      if (typeof userFilter[element.code] != 'undefined') {
        d.val = userFilter[element.code];
      }

      result.content.push( d );
      break;

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
            size: 's',
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
