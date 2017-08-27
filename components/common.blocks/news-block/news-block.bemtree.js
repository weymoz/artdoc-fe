block('news-block').content()(function() {
    return [
    {
      elem: 'header',
      content: [
        {
          elem: 'title',
          content: this.ctx.title
        }
      ]
    },
    {
      elem: 'content',
      content: [
        this.ctx.content,
        this.ctx.image && {
          block: 'link',
          url: this.ctx.url,
          content: [
            {
              elem: 'preview',
              content: [
                {
                  block: 'image',
                  url: this.ctx.image
                }
              ]
            },
            {
              elem: 'icon'
            }
          ]
        }
      ]
    },
    {
      elem: 'footer',
      content: [
        {
          block: 'link',
          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
          url: this.ctx.url,
          content: this.ctx.linkname
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
              format: 'DD.MM.YY',
              content: this.ctx.date
            }
          ]
        }
      ]
    }
    ]
});
