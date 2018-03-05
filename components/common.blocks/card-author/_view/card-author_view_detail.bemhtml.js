block('card-author').mod('view', 'detail')(

  def()( () => {
    return applyNext({ author_image: 'l' });
  }),

  content()( (node, ctx) => {

    let data_rows = [
      {field: 'career', name: 'Карьера'},
      {field: 'birthday', name: 'Дата рождения'},
      {field: 'city', name: 'Место рождения', sub_field: 'name'},
      {field: 'email', name: 'Эл. почта'},
      {field: 'web', name: 'Сайт'}
      ];

    let socials = [
      { field: 'fb', icon: 'facebook'  },
      { field: 'yt', icon: 'instagram' },
      { field: 'inst', icon: 'twitter' },
      { field: 'vk', icon: 'vkontakte' },
      { field: 'tw', icon: 'youtube' }
    ]


    let author_info = data_rows.map(function (elem) {

      if (!ctx.author[elem.field] || !ctx.author[elem.field][0]) {
        return false;
      }

      let value = elem.sub_field ? ctx.author[elem.field][0][elem.sub_field] : ctx.author[elem.field];

      if( elem.field === 'web' ) {
        value = {
          block: 'link',
          mods: { size: 's' },
          attrs: { target: '_blank' },
          url: 'http://' + ctx.author[elem.field],
          content: {
            elem: 'content',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            content: ctx.author[elem.field]
          }
        }
      }

      if( elem.field === 'email' ) {
        value = {
          block: 'link',
          mods: { size: 's' },
          attrs: { target: '_blank' },
          url: 'mailto:' + ctx.author[elem.field],
          content: {
            elem: 'content',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            content: ctx.author[elem.field]
          }
        }
      }

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


    let social_links = socials.map(function (elem) {

      if (!ctx.author[elem.field] || !ctx.author[elem.field][0]) {
        return false;
      }

      let value = elem.sub_field ? ctx.author[elem.field][0][elem.sub_field] : ctx.author[elem.field];


      return {
        block: 'button',
        mods: {
          type: 'link',
          view: 'plain',
          size: 'l'
        },
        mix: { block: 'card-author', elem: 'social-item' },
        attrs: { target: '_blank' },
        icon: {
          block: 'icon',
          mods: {
            social: elem.icon,
            size: 'l',
            black: true
          }
        },
        url: value
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
                  },
                  {
                    elem: 'social-row',
                    content: social_links
                  }
                  ]
              },

            ]
          }
        ]
      }
    ]
  })

);
