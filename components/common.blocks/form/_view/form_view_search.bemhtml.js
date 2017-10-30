block('form').mod('view', 'search')(

  def()( () => {
    return applyNext( { ctx: {
      method: 'GET',
      action: '/search'      
    } } );
  }),

  content()( () => {
    return [
      { tag: 'br' },
      { tag: 'br' },
      {
        elem: 'content',
        content: {
          block: 'form-field',
          mods: { type: 'input' },
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
      { tag: 'br' },
      { tag: 'br' },
      {
        elem: 'footer'
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