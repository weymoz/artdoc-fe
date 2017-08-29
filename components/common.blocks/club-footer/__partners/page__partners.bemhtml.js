block('page').elem('partners').content()(function() {
  this.ctx.partners = [
      {
        counter: 'partner_1'
      },
      {
        counter: 'partner_2'
      },
      {
        counter: 'partner_3'
      },
      {
        counter: 'partner_4'
      },
      {
        counter: 'partner_5'
      },
      {
        counter: 'partner_6'
      },
      {
        counter: 'partner_7'
      },
      {
        counter: 'partner_8'
      },
      {
        counter: 'partner_9'
      }
    ]

  return [
    this.ctx.partners.map( item => {
       return {
         elem: 'partner',
         content: [
           {
             elem: 'image',
             mix: { block: 'page-index', elem: item.counter },
           }
         ]
       }
    })
  ]
});
