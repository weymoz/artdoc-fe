block( 'card-selection' ).elem( 'author' )(
  match( function () { return !this._name } ).def()(''),
  content()( ( node, ctx ) => {
    return node._name
  } ),
  match( ( node, ctx ) => node._url ).content()( ( node, ctx ) => {
    let author = node._author[0];
    return {
        block: 'card-author',
        content: [
            {
                block: 'image',
                mix: { block: 'card-author', elem: 'aside' },
                mods: {
                    circle: true
                },
                url: 'http://dev.artdoc.media/upload/resize/' + author.image_id + '/' + node.author_image + '.jpg'
            },
            {
              block: 'list',
              content: [
                {
                  elem: 'content',
                  mix: { block: 'text', mods: { bold: true } },
                  content: author.name
                },
                {
                  elem: 'date',
                  mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                  content: [
                  {
                    block: 'text',
                    mods: {
                      format: 'datetime'
                    },
                    format: 'DD MMMM YYYY',
                    content: node._created_at
                  }
                  ]
                }
              ]
            }

        ]
    }
  } )
);
