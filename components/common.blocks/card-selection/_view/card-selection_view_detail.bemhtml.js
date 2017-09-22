block('card-selection').mod('view', 'detail')(

  def()( () => {
    return applyNext({ author_image: 'm' });
  }),

  content()( node => {
    return [
        {
          elem: 'content',
            content: [
              {
                elem: 'cover',
                width: 1024,
                height: 250,
                content: [
                  {
                    block: 'breadcrumbs',
                    mix: [
                      { block: 'page', elem: 'content' },
                      { block: node.block, elem: 'header' },
                    ],
                    url: '/selection/' + node._code
                  },
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
          elem: 'aside',
          mix: { block: 'page', elem: 'content' },
          content: [
            { elem: 'author' },
            { elem: 'description' }
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
