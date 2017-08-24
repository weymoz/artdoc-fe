block( 'card-movie' ).elem( 'show-more' )(
  tag()( 'a' ),
  addAttrs()( node => {
    return {
      href: node._url
    }
  } ),
  content()( () => 'Подробнее о фильме' )
)
