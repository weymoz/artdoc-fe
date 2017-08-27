block('card-selection').elem('preview')(
    content()( ( ) => {
        return [
          { elem: 'cover' },
          {
            elem: 'preview-info',
            content: [
              { elem: 'name' },
              { elem: 'author' },
              { elem: 'counter' }
            ]
          }
        ];
    })
);
