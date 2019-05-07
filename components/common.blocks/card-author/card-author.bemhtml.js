block('card-author')(
  match((node, ctx) => ctx.author).def()((node, ctx) => {
    Object.keys(ctx.author).map(key => {
      node[Symbol.for('_' + key)] = ctx.author[key];
      return true;
    });

    node[Symbol.for('_meta')] = ctx.content;

    if (ctx.color !== undefined) {
      node[Symbol.for('_color')] = ctx.color;
    }

    if (ctx.isLink === false) {
      node[Symbol.for('_isLink')] = ctx.isLink;
    }

    switch (node.mods.size) {
      case 'xs':
        node.width = 48;
        node.height = 48;
        break;
      default:
        node.width = 84;
        node.height = 84;
    }

    return applyNext();
  }),

  match(node => !node[Symbol.for('_image_id')]).addMods()({ 'no-photo': true }),

  match(node => node[Symbol.for('_image_id')]).content()(node => {
    return {
      block: 'image',
      mods: { circle: true, 'has-resize': true },
      mix: { block: 'card-author', elem: 'aside' },
      width: node.width,
      height: node.height,
      url: node[Symbol.for('_image_id')]
    };
  }),

  match(node => node[Symbol.for('_name')])(
    appendContent()(node => {
      if (node[Symbol.for('_isLink')] !== false) {
        return {
          elem: 'content',
          content: {
            block: 'link',
            mods: {
              size: 's'
            },
            url:
              'https://artdoc.media/' +
              node['_lang'] +
              '/author/' +
              node[Symbol.for('_id')],
            content: {
              elem: 'content',
              attrs:
                node[Symbol.for('_color')] !== undefined
                  ? { style: 'color: rgb(160, 160, 172)' }
                  : { style: 'color: #000' },
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content: node[Symbol.for('_name')]
            }
          }
        };
      } else {
        return {
          elem: 'content',
          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
          content: node[Symbol.for('_name')]
        };
      }
    })
  ),

  match(node => node[Symbol.for('_meta')])(
    elem('content').appendContent()(node => node[Symbol.for('_meta')])
  ),

  mod('no-photo', true).prependContent()({
    elem: 'aside'
  })
);
