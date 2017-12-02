block('pagination')(
  tag()('nav'),
  addMix()({ block: 'slider'}),
  content()(function () {

    var
      apiParams = this.ctx.params,
      paginatorParams = {
        selected: parseInt(apiParams.page),
        pagesCount: Math.ceil(apiParams.total_count / apiParams['per-page']),
        perPage: apiParams['per-page'],
        maxElements: 10,
      },
      need_dots = false, // for ... showing in cycle
      url = apiParams.params;

    if (paginatorParams.pagesCount < 2) {
      return [];
    }

    url.set('page', paginatorParams.selected - 1);

    let page_links = [{
      elem: 'arrow',
      direction: 'prev',
      url: '?' + url.toString(),
      active: paginatorParams.selected != 1
    }];

    function checkRange(index, count, selected, range) {
      if (!Array.isArray(range) ) {
        range = [range, range];
      }

      // 2 19 6 [3,5]
      console.log(index, count, selected, range);

      if (index == 1) return true;
      if (index == count) return true;

      if (index < selected) {
        if ((selected - index) < range[0]) return true;
        if ((selected - range[0] - 1) <= 1) return true;

      } else {
        if ((index - selected) < range[1]) return true;
        if (selected + range[1] + 1 >= count) return true;
      }

      return false;
    }

    function calcRange(max, count, selected) {
      var result = {
        left: selected-1,
        right: count-selected + 1
      }, decreese = 'left';


      if ((result.left + result.right) > max) {
        for (var i = (result.left + result.right - max); i > 0; i--) {

          if (result.left + 1 >= result.right) {
            decreese = 'left';
          } else {
            decreese = 'right';
          }



          if (result[decreese]>1) {
            result[decreese]--;
          } else {
            result[decreese=='left'?'right':'left'] --;
          }
        }

      }

      return [result.left, result.right];
    }

    for (var i = 1; i <= paginatorParams.pagesCount; i ++ ) {
      if (
        checkRange(i, paginatorParams.pagesCount, paginatorParams.selected,
          calcRange(9, paginatorParams.pagesCount, paginatorParams.selected))
      ) {

        if (need_dots) {

          if (i > paginatorParams.selected) {
            url.set('page',need_dots + Math.ceil((i - need_dots)/2));
          } else {
            url.set('page',need_dots + Math.floor((i - need_dots)/2));
          }


          page_links.push({
            elem: 'pagelink',
            content: '...',
            active: true,
            url: url.toString() ? '?' + url.toString() : '',
          });
          need_dots = false;
        }


        url.set('page',i);
        page_links.push({
          elem: 'pagelink',
          selected: paginatorParams.selected == i,
          url: url.toString() ? '?' + url.toString() : '',
          active: !(paginatorParams.selected == i),
          content: i
        });

      } else {
        if (!need_dots) {
          need_dots = i-1;
        }

      }

    }

    url.set('page',  paginatorParams.selected + 1);

    page_links.push({
      elem: 'arrow',
      direction: 'next',
      url: '?' + url.toString(),
      active: paginatorParams.selected != paginatorParams.pagesCount
    });



    return  page_links;
  })
)
