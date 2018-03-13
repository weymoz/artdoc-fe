block('page-club').elem('party').content()(function() {
  this.ctx.showed = [
      {
        name: this.ctx.lang === 'en' ? 'Alena Solntseva' : 'Алёна Солнцева',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_1'
      },
      {
        name: this.ctx.lang === 'en' ? 'Andrey Archangelsky' : 'Андрей Архангельский',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_2'
      },
      {
        name: this.ctx.lang === 'en' ? 'Andrey Plahov' : 'Андрей Плахов',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_3'
      },
      {
        name: this.ctx.lang === 'en' ? 'Andrey Shemyackin' : 'Андрей Шемякин',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_4'
      },
      {
        name: this.ctx.lang === 'en' ? 'Anton Dolin' : 'Антон Долин',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_5'
      },
      {
        name: this.ctx.lang === 'en' ? 'Vasiliy Koreckiy' : 'Василий Корецкий',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_6'
      },
      {
        name: this.ctx.lang === 'en' ? 'Viktor Matizen' : 'Виктор Матизен',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_7'
      },
      {
        name: this.ctx.lang === 'en' ? 'Konstantin Shavlovskiy' : 'Константин Шавловский',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_8'
      },
      {
        name: this.ctx.lang === 'en' ? 'Victoria Smirnova' : 'Виктория Смирнова',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_9'
      },
      {
        name: this.ctx.lang === 'en' ? 'Elena Stishova' : 'Елена Стишова',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_10'
      },
      {
        name: this.ctx.lang === 'en' ? 'Zara Abdullaeva' : 'Зара Абдуллаева',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_11'
      },
      {
        name: this.ctx.lang === 'en' ? 'Larisa Malyukova' : 'Лариса Малюкова',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
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
        name: this.ctx.lang === 'en' ? 'Nikita Kartsev' : 'Никита Карцев',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_13'
      },
      {
        name: this.ctx.lang === 'en' ? 'Lyubov Arkus' : 'Любовь Аркус',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_14'
      },
      {
        name: this.ctx.lang === 'en' ? 'Olga Galitskaya' : 'Ольга Галицкая',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_15'
      },
      {
        name: this.ctx.lang === 'en' ? 'Olga Shervud' : 'Ольга Шервуд',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
        counter: 'director_16'
      },
      {
        name: this.ctx.lang === 'en' ? 'Tatiana Ershova' : 'Татьяна Ершова',
        role: this.ctx.lang === 'en' ? 'Film Critic' : 'Кинокритик',
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
