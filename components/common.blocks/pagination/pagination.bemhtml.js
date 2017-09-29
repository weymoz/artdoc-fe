block('pagination')(
  tag()('nav'),
  content()(function () {

    let params = this.ctx.params;

    if (params['total_count'] <= params['per-page']) {
      return [];
    }

    params.params.set('page', params.page - 1);

    let page_links = [{
      block: 'link',
      mix: {
        block: 'pagination', 'elem': 'pagelink',
        elemMods: {
          action: 'prev',
          state: params.page == 1 ? 'disabled' : 'active',
        }
      },
      url: '?' + params.params.toString(),
      content: "<"
    }];

    params.params.set('page',1);

    for (var i = 0; i < this.ctx.params.total_count; i += this.ctx.params['per-page'] ) {
      page_links.push({
        block: 'link',
        mix: {
          block: 'pagination',
          elem: 'pagelink',
          elemMods: {
            state: params.page == params.params.get('page') ? 'selected' : ''
          },
        },
        url: params.params.toString() ? '?' + params.params.toString() : '',
        content: params.params.get('page') ? params.params.get('page') : 1
      });
      params.params.set('page', params.params.get('page') ? ( parseInt(params.params.get('page') ) + 1 ) : 2 );
    }

    params.params.set('page',  parseInt(params.page) + 1);

    page_links.push({
      block: 'link',
      mix: {
        block: 'pagination', 'elem': 'pagelink',
        elemMods: {
          action: 'next'
        }
      },
      url: '?' + params.params.toString(),
      content: ">"
    });

    return  page_links
  })
)
