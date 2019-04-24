block('list').js()(true)

block('list')(
  tag()('ul'),

  match((node, ctx) => ctx.items).content()(function() {
    return this.ctx.items.map(function(item) {
      let content = typeof item === 'object' ? item.content : item

      return {
        elem: 'item',
        mix: { block: item.block, elem: item.elem },
        content: [content]
      }
    })
  })
)
