block('list').js()(true)


block( 'list' )(
  // def()(() => {
  //   let ctx = this.ctx,
  //       mods = this.mods;

  //   // items = ctx.items || [];

  //   // return applyNext({
  //   //   _count: items.length,
  //   //   _items: items
  //   // });
  // }),

  tag()('ul'),

  match( ( node, ctx ) => ctx.items ).content()(function () {
    return this.ctx.items.map( function ( item ) {
      let content = typeof item === 'object' ? item.content : item;

      return {
        elem: 'item',
        mix: { block: item.block, elem: item.elem },
        content: [
          content
        ]
      }
    });
  })

  // elem('item').replace()(function () {
  //   let bl = this.ctx.mix;
  //   console.log( bl );
  // })
);
