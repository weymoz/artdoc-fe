block('movie-about')(
/*
  info                      Информация о фильме
    categories[]              Тема
    year                      Год производства
    countries[]               Страна создания
    studio[]                  Студия
    duration                  Продолжительность
    genres[]                  Жанр
    fin_type                  Финансирование
    tvpg                      Возрастной рейтинг
    actioncountries[]         Страна действия
    actioncities[]            Город действия
    actionperiods[]           Время действия
    language[]                Язык фильма
    subs[]                    Субтитры

  authors                   Авторы
    authors[]                 Автор
                                Фотография
                                Имя
                                ? Должность/роль

  crew                      Съемочная группа
    director                  Режиссер
    screenwriter              Сценарист
    operator                  Оператор
    producer                  Продюсер
    composer                  Композитор
    sound_producer            Звукорежиссер

  tags                      Теги
    tags                      Теги

  awards                    Награды
*/

  // def()(function() {
  //   this.ctx.model = [
  //     { title: 'info', content: [ 'categories', 'year', 'countries', 'studio', 'duration', 'genres', 'fin_type', 'tvpg', 'actioncountries', 'actioncities', 'actionperiods', 'language', 'subs' ] },
  //     { title: 'authors', content: [ 'authors' ] },
  //     { title: 'crew', content: [ 'director', 'screenwriter', 'operator', 'producer', 'composer', 'sound_producer' ] },
  //     { title: 'tags', content: [ 'tags' ] }
  //   ];

  //   return applyNext({
  //     elem: 'item',
  //     content: [
  //       {
  //         elem: 'title'
  //       },
  //       {
  //         elem: 'content'
  //       }
  //     ]
  //   })

  //   return applyNext();
  // }),

  content()( ( node, ctx ) => {
    const model = [
      {
        section: [
          { title: 'authors' , content: [ 'authors' ] },
          { title: 'crew'    , content: [ 'director', 'screenwriter', 'operator', 'producer', 'composer', 'sound_producer' ] },
          { title: 'tags'    , content: [ 'tags' ] },
        ]
      },
      {
        section: [
          { title: 'info'    , content: [ 'categories', 'year', 'countries', 'studio', 'duration', 'genres', 'fin_type', 'tvpg', 'actioncountries', 'actioncities', 'actionperiods', 'language', 'subs' ] },
        ]
      }
    ];

    return model.map( section => {
      return {
        elem: 'section',
        content: section.section.map( item => {
          return [
            {
              elem: 'title',
              title: item.title
            },
            {
              elem: 'item',
              elemMods: {
                section: item.title
              },
              data: item.content,
              movie: ctx.movie
            }
          ]
        } )
      }
    });
  })

)
