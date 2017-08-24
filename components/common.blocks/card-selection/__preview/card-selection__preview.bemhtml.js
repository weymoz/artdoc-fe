block('card-selection').elem('preview')(
    content()( ( node, ctx ) => {
        return [
            { elem: 'cover' },
            { elem: 'name' },
            { elem: 'author' },
            { elem: 'counter' }
        ];
    })
);
