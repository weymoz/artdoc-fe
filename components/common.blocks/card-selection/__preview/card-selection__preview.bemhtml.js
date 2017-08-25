block('card-selection').elem('preview')(
    content()( ( node, ctx ) => {
        return [
            { elem: 'cover' },
            { elem: 'preview-info',
              content:[
                { elem: 'name' },
                { elem: 'author' },
                { elem: 'counter' }
            ]}
        ];
    })
);
