block('card-selection').elem('preview')(
    content()( ( node, ctx ) => {
        return [
          { elem: 'cover',
            width: ctx.width,
            height: ctx.height
          }
        ];
    })
);
