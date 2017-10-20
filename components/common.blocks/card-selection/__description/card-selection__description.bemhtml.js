block('card-selection').elem('description')(
    content()( node => {
        return [
            {
                block: 'text',
                content: {
                  html: node._description
                }
            }
        ];
    })
);