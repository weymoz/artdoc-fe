block('filters').content()(function() {
  // data from api
  let filters = this.data.filters;

  // applied filters from get:
  let userFilter = this.data['filter'];

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
      skip: true,

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
      elem: 'filter-label',
      mods: {
        type: 'select',
        size: 'l',
      },
      tag: 'label',
      content: []
    }

    switch (element.type) {
      case 'int':

        d = {
          block: 'select',
          name: 'filter[' + element.code + '][]',
          text: filtersMap[element.code].name,
          mix: { block: 'button',    mods: { family: 'helvetica-bold', loaded: true } },
          mods: {
            mode: 'check',
            size: 'm',
            theme: 'artdoc-dark'
          },
          options: element.values.sort(filtersMap[element.code].sort).map(function (option) {
            return {val: option.id?parseInt(option.id):option.value, text: option.value}
          })
        }

        if (typeof userFilter[element.code] != 'undefined') {

          d.val = userFilter[element.code].map(
            function (id) {
              return parseInt(id);
            }
          );
        }

        result.content.push( d );

        break;
      case 'bool':

        d = {

          block: 'checkbox',
          tag: 'div',
          mix: { block: 'font', mods: { family: 'helvetica-bold', loaded: true } },
          name: 'filter[' + element.code + '][]',
          mods: {
            checked: typeof userFilter[element.code] != 'undefined' ? true : false,
          },
          text: filtersMap[element.code].name,
        }

        //return d;
        result.content.push(d)
        break;
    }
    return result;
  });


  filter_fields.push({
    block: 'button',
    mods: { type: 'submit' , theme: 'artdoc-dark'},
    text: 'Применить',
    mix: { block: 'font', mods: { family: 'helvetica-bold', loaded: true } },
  })


  return [
    {

    },
    {
      block: 'filter-form',
      tag: 'form',
      attrs: {
        method: 'get'
      },
      content: filter_fields
    }

   ];

});
