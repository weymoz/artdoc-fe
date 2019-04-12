block('card-movie').elem('buy')(
  content()(node => {
    let text =
      node._lang === 'en'
        ? 'The film will be available for&nbsp;viewing after approval by the copyright owner'
        : 'Фильм будет доступен для&nbsp;просмотра после одобрения правообладателем';
    return {
      block: 'paragraph',
      mods: { align: 'center', size: 's', empty: true },
      mix: { block: 'font', mods: { family: 'pt-mono' } },
      attrs: {
        style:
          'background-color: #eee; color: #000; padding: 8px 20px; box-sizing: border-box;'
      },
      content: {
        html: text
      }
    };
  }),

  match(
    node =>
      node._status === 20 ||
      (node._video_link && node._price && node._price.price === 0)
  ).replace()(node => {
    return {
      block: 'button',
      mix: { block: node.block, elem: node.elem },
      mods: {
        type: 'link',
        width: 'available',
        size: 'l',
        theme: node.mods.theme
      },
      url: '/' + node._lang + '/movie/' + node._code + '/watch',
      text: node._lang === 'en' ? 'Watch free' : 'Смотреть бесплатно'
    };
  }),

  match(node => node._offlineShow).replace()(node => {
    let result = {
      attrs: {
        style:
          'border: 2px solid #000;' + 'margin-top: 20px; position: relative;'
      },
      content: [
        {
          block: 'heading',
          attrs: {
            style:
              'text-align: left; margin-top: 24px; padding-left: 20px; padding-right: 70px; padding-bottom: 5px; box-sizing: border-box;'
          },
          mods: { caps: true, size: 'xs' },
          mix: {
            block: 'font',
            mods: { family: 'helvetica-neue-condensed-bold', loaded: true }
          },
          content: 'Артдокфест 2018'
        }
      ]
    };

    if (typeof node._offlineShow.description !== 'undefined') {
      result.content.push({
        mix: { block: 'font', mods: { family: 'pt-mono' } },
        attrs: {
          style:
            'color: #000; padding: 10px 60px 5px 20px; font-size: 13px; line-height: 20px; color: #5f5f5f; box-sizing: border-box;'
        },
        content: {
          html: node._offlineShow.description
        }
      });
    }

    if (typeof node._offlineShow.link !== 'undefined') {
      result.content.push({
        block: 'button',
        mix: { block: node.block, elem: node.elem },
        mods: {
          type: 'link',
          width: 'available',
          size: 'l',
          theme: node.mods.theme
        },
        url: node._offlineShow.link,
        target: '_blank',
        text: node._lang === 'en' ? 'Buy ticket' : 'Купить билет'
      });
    }
    return result;
  }),

  match(node => node._schedules && node._schedules.length).replace()(node => {
    let type, size, text;
    switch (node.elemMods.type) {
      case 'button':
        type = 'link';
        size = 'xl';
        text =
          node._lang === 'en' ? 'Buy online ticket' : 'Купить онлайн-билет';
        break;
      default:
        // checkbox
        type = 'button';
        size = 'xl';
        text =
          node._lang === 'en' ? 'Buy online ticket' : 'Купить онлайн-билет';
        break;
    }

    return {
      block: node.elemMods.type || 'checkbox',
      mix: {
        block: node.block,
        elem: node.elem,
        elemMods: { type: node.elemMods.type },
        js: true
      },
      mods: {
        type: type,
        // width: 'available',
        size: size,
        theme: node.mods.theme
      },
      url: '/' + node._lang + '/movie/' + node._code + '#schedule',
      text: text
    };
  }),

  match(node => {
    const result =
      node._price && node._price.price > 0 && node && node._allowedInCountry;

      return result
  }).replace()(node => {
    let type, size, text;
    let currency = node._lang === 'en' ? '$' : ' ' + node._currency;
    let correctView =
      node._currency === '$'
        ? currency + ' ' + node._price.price
        : node._price.price + ' ' + currency;
    let description = node._lang === 'en' ? 'Watch for ' : 'Смотреть за ';

    let label = description + correctView;
    switch (node.elemMods.type) {
      case 'button':
        type = 'link';
        size = 'xl';
        text = label;
        break;
      default:
        // checkbox
        type = 'button';
        size = 'm';
        text = label;
        break;
    }

    return {
      block: node.elemMods.type || 'checkbox',
      mix: { block: node.block, elem: node.elem },
      mods: {
        type: type,
        size: size,
        theme: node.mods.theme
      },
      url: '/' + node._lang + '/movie/' + node._code + '/buy',
      text: text
    };
  }),

  match(
    node =>
      node._video_link && (node._view_access < 512 || node._price.price > 0)
  ).replace()(node => {
    return [
      {
        block: 'button',
        mix: { block: node.block, elem: node.elem },
        mods: {
          type: 'link',
          width: 'available',
          size: 'l',
          theme: node.mods.theme
        },
        url: '/' + node._lang + '/movie/' + node._code + '/watch',
        text: node._lang === 'en' ? 'Watch online' : 'Смотреть онлайн'
      },
      {
        block: 'paragraph',
        mods: {
          size: 's'
        },
        attrs: {
          style:
            'font-size: 12px; margin-top: 10px; text-align: center; color: #5f5f5f;'
        },
        content:
          node._lang === 'en'
            ? 'Free of charge for Artdoc Club Members'
            : 'Бесплатно для участников Клуба Артдок'
      }
    ];
  })
);
