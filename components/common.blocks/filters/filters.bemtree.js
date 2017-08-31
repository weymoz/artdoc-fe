block('filters').content()(function() {
  // data from api
  let filters = this.data.filters;

  // applied filters from get:
  let userFilter = this.data['filter'];

  let filtersMap = {
    category: {
      code: 'category',
      name: 'Категории',
      skip: true,
    },
    full_movie: {
      code: 'full_movie',
      name: 'Только с видео',
      skip: true,
    },
    free: {
      code: 'free',
      name: 'Только бесплатные',
      skip: true,
    },
    rating: {
      name: 'Рейтинг artdoc.media',
      skip: false,
    },
    year: {
      name: 'Год выхода',
      skip: false,
    },
    country: {
      name: 'Страна производства',
      skip: false,
    },
    studio: {
      skip: false,
      name: 'Студия производства'
    },
    genre: {
      name: 'Жанры',
      skip: false,
    },
    period: {
      name: 'Истрический период',
      skip: false,
    },
    action_country: {
      name: 'Страна действия',
      skip: false,
    },
    action_city: {
      name: 'Место действия',
      skip: false,
    },
    language: {
      name: 'Язык',
      skip: false
    },
    subs: {
      name: 'Субтитры',
      skip: false
    },
    fin_type: {
      name: 'Финансирование',
      skip: false
    },
    nominations: {
      name: 'Номинации',
      skip: false
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
          options: element.values.sort(function (a, b) {
            return a.value.localeCompare(b.value, 'ru');
          }).map(function (option) {
            return {val: option.id?option.id:option.value, text: option.value}
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

        console.log('##$$%%', typeof userFilter[element.code]);


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
    mods: { type: 'submit'},
    text: 'Применить'
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
