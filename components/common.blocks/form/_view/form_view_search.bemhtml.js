block('form').mod('view', 'search')(

  def()( () => {
    return applyNext( { ctx: {
      method: 'GET',
      action: '/search'      
    } } );
  }),

  addMix()({ block: 'page', elem: 'section' }),

  content()( () => {
    return [
      {
        elem: 'header',
        mix: { block: 'page', elem: 'content', elemMods: { width: 'narrow' } },
        content: {
          block: 'form-field',
          mods: { type: 'input' },
          mix: { block: 'page', elem: 'content' },
          name: 'q',
          content: {
            elem: 'control',
            content: {
              block: 'input',
              mods: {
                type: 'search',
                width: 'available'
              },
              placeholder: 'Поиск'
            }
          }
        }
      },
      {
        elem: 'content',
        mix: { block: 'page', elem: 'content', elemMods: { width: 'narrow' } },
      }
      // {
      //   elem: 'footer',
      //   content: [
      //     {
      //       block: 'paragraph',
      //       mods: {
      //         align: 'center'
      //       },
      //       content: 'К сожалению, мы ничего не нашли по запросу «айцуке». Попробуйте еще раз или загляните в каталог фильмов.'
      //     }
      //   ]
      // },
      // { tag: 'br' },
      // { tag: 'br' }

    ]
  } )

)