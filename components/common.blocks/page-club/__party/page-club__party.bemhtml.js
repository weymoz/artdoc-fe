block('page-club').elem('party').content()(function() {
  this.ctx.showed = [
      {
        image: '',
        name: 'Иван',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      },
      {
        image: '',
        name: '',
        role: ''
      }
    ]

  return [
    this.ctx.showed.map( item => {
       return {
         elem: 'item',
         content: [
           {
             elem: 'maker',
             image: item.image,
             name: item.name,
             role: item.role
           }
         ]
       }
    })
  ]
});
