block('club-footer').elem('party').content()(function() {
  this.ctx.showed = [
      {
        counter: 'director_1'
      },
      {
        counter: 'director_2'
      },
      {
        counter: 'director_3'
      },
      {
        counter: 'director_4'
      },
      {
        counter: 'director_5'
      },
      {
        counter: 'director_6'
      },
      {
        counter: 'director_7'
      },
      {
        counter: 'director_8'
      },
      {
        counter: 'director_9'
      }
    ]

  return [
    this.ctx.showed.map( item => {
       return {
         elem: 'maker',
         content: [
           {
             elem: 'image',
             mix: { block: 'club-footer', elem: item.counter }
           }
         ]
       }
    })
  ]
});

