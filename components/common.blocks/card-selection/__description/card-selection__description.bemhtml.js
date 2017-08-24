block('card-selection').elem('description')(
    content()( node => {
        return [
            {
                block: 'text',
                content: node._description
            }
        ];
    })
);