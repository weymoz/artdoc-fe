block('card-selection').elem('description')(
    content()( ( node, ctx ) => {
        return [
            {
                block: 'text',
                content: node._description
            }
        ];
    })
);