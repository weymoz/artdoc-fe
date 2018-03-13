block( 'card-movie' ).elem( 'show-more' )(
  tag()( 'a' ),

  addAttrs()( node => {
    return {
      href: node._url
    }
  }),

  content()( (node) => {
    return node._lang === 'en' ? 'More about the movie' : 'Подробнее о фильме'
  })
)
