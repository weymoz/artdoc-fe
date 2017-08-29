block('page-club').elem('partners').content()(function() {
  this.ctx.partners = [
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      }
    ]

  return [
    this.ctx.partners.map( item => {
       return {
         elem: 'partner',
         content: [
           {
             block: 'image',
             image: item.image,
           }
         ]
       }
    })
  ]
});
