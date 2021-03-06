block('card-selection').mod('view', 'detail')(

  def()( () => {
    return applyNext({ author_image: 'l' });
  }),

  content()( node => {
    return [
        {
          elem: 'header',
          content: [
            {
              elem: 'cover',
              width: 1024,
              height: 250,
              content: [
                // {
                //   block: 'breadcrumbs',
                //   mix: [
                //     { block: 'page', elem: 'content' },
                //     { block: node.block, elem: 'header' },
                //   ],
                //   url: '/selection/' + node._code
                // },
                {
                  elem: 'footer',
                  mix: { block: 'page', elem: 'content' },
                  content: [
                    { elem: 'name' },
                    { elem: 'counter' }
                  ]
                }
              ]
            },
          ]
        },
        {
          elem: 'section',
          mix: { block: 'page', elem: 'content' },
          content: [
            {
              elem: 'content',
              content: [
                { elem: 'author' },
                { elem: 'description' }
              ]
            },
            {
              elem: 'aside',
              content: {
                elem: 'share',
                content: [
                  // {
                  //   block: 'link',
                  //   mix: { block: node.block, elem: 'share-item' },
                  //   url: '//vk.com/share.php',
                  //   target: '_blank',
                  //   content: {
                  //     block: 'icon',
                  //     mods: { social: 'vkontakte', size: 'xxl' },
                  //   }
                  // },
                  {
                    block: 'link',
                    mix: { block: node.block, elem: 'share-item' },
                    url: '//www.facebook.com/sharer.php',
                    target: '_blank',
                    content: {
                      block: 'icon',
                      mods: {
                        social: 'facebook',
                        size: 'xxl',
                        facebook: 'black'
                      },
                    }
                  },
                  {
                    block: 'link',
                    mix: { block: node.block, elem: 'share-item' },
                    url: '//twitter.com/share',
                    target: '_blank',
                    content: {
                      block: 'icon',
                      mods: {
                        social: 'twitter',
                        size: 'xxl',
                        twitter: 'black'
                      },
                    }
                  }
                ]
              }
            }
          ]
        }
     ]
  }),

  elem('name')(
    tag()('h1'),
    addMix()( node => {
      return [
        { block: 'heading', mods: { 'has-dot': true, size: 'xxl', theme: node.mods.theme } }
      ]
    } )
  )
);
