block( 'card-selection' ).elem( 'author' )(

  // match( function () { return !this._name } ).def()(''),
  // content()( node => {
  //   return node._name
  // } ),

  match( node => node._author && node._author.length ).content()( node => {
    let author = node._author[0];
    return {
        block: 'card-author',
        mods: { size: node.author_image },
        author: author,
        isLink: false,
        content: {
          block: 'list',
          mods: { size: 's' },
          content: [
            {
              elem: 'date',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content: [
                {
                  block: 'text',
                  locale: node._lang,
                  mods: { format: 'datetime' },
                  format: 'DD MMMM YYYY',
                  content: node._created_at
                }
              ]
            }
          ]
        }
      }
  } )
);
