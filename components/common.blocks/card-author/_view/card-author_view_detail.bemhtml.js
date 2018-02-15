block('card-author').mod('view', 'detail')(

  def()( () => {
    return applyNext({ author_image: 'l' });
  }),

  content()( (node, ctx) => {

    console.log('TEST DETAIL CARD', ctx);

    let data_rows = [
      {field: 'career', name: 'Карьера'},
      {field: 'birthday', name: 'Дата рождения'},
      {field: 'city', name: 'Город', sub_field: 'name'},
      {field: 'email', name: 'E-mail'}
      ];

    let author_info = data_rows.map(function (elem) {
      if (!ctx.author[elem.field]) {
        return false;
      }

      let value = elem.sub_field ? ctx.author[elem.field][0][elem.sub_field] : ctx.author[elem.field];

      return { elem: 'item',
        content: [
        {
          elem: 'term',
          content: elem.name
        },
        {
          elem: 'definition',
          content: value
        }

      ]
      }

    })


    return [
      {
        block: 'page',
        elem: 'content',
        content: [
          {
            block: 'author',
            content: [
              {
                elem: 'photo',
                content: {
                  block: 'image',
                  mix: {block: node.block, elem: 'image'},
                  mods: {responsive: true, 'has-resize': true, circle: true},
                  url: ctx.author.image_id,
                  width: 310,
                  height: 310
                }
              },
              {
                elem: 'description',
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: ctx.author.name,
                  },
                  {
                    block: 'list',
                    mods: {type: 'description', size: 's'},
                    mix: {block: 'font', mods: {family: 'pt-mono', loaded: true}},
                    content: author_info

                  }
                  ]
              }

            ]
          }
        ]
      }
    ]
  })

);
