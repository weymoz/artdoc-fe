block('page-club').elem('party').content()(function() {
  this.ctx.showed = [
      {
        name: 'Алёна Солнцева',
        role: 'Кинокритик',
        counter: 'director_1'
      },
      {
        name: 'Андрей Архангельский',
        role: 'Кинокритик',
        counter: 'director_2'
      },
      {
        name: 'Андрей Плахов',
        role: 'Кинокритик',
        counter: 'director_3'
      },
      {
        name: 'Андрей Шемякин',
        role: 'Кинокритик',
        counter: 'director_4'
      },
      {
        name: 'Антон Долин',
        role: 'Кинокритик',
        counter: 'director_5'
      },
      {
        name: 'Василий Корецкий',
        role: 'Кинокритик',
        counter: 'director_6'
      },
      {
        name: 'Виктор Матизен',
        role: 'Кинокритик',
        counter: 'director_7'
      },
      {
        name: 'Константин Шавловский',
        role: 'Кинокритик',
        counter: 'director_8'
      },
      {
        name: 'Виктория Смирнова',
        role: 'Кинокритик',
        counter: 'director_9'
      },
      {
        name: 'Елена Стишова',
        role: 'Кинокритик',
        counter: 'director_10'
      },
      {
        name: 'Зара Абдуллаева',
        role: 'Кинокритик',
        counter: 'director_11'
      },
      {
        name: 'Лариса Малюкова',
        role: 'Кинокритик',
        counter: 'director_12'
      }
    ]

  return [
    this.ctx.showed.map( item => {
       return {
         elem: 'item',
         content: [
           {
             elem: 'maker',
             name: item.name,
             role: item.role,
             counter: item.counter
           }
         ]
       }
    })
  ]
});


block('page-club').elem('party').elemMod('hide', true).content()(function() {
  this.ctx.hide = [
      {
        name: 'Никита Карцев',
        role: 'Кинокритик',
        counter: 'director_13'
      },
      {
        name: 'Любовь Аркус',
        role: 'Кинокритик',
        counter: 'director_14'
      },
      {
        name: 'Ольга Галицкая',
        role: 'Кинокритик',
        counter: 'director_15'
      },
      {
        name: 'Ольга Шервуд',
        role: 'Кинокритик',
        counter: 'director_16'
      },
      {
        name: 'Татьяна Ершова',
        role: 'Кинокритик',
        counter: 'director_17'
      }
    ]

  return [
    this.ctx.hide.map( item => {
       return {
         elem: 'item',
         content: [
           {
             elem: 'maker',
             name: item.name,
             role: item.role,
             counter: item.counter
           }
         ]
       }
    })
  ]
});
