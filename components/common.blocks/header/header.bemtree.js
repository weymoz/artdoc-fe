block('header')(
  def()( node => {
    const category = [
      {
        name: 'Все фильмы',
        id: null,
        code: 'all',
      },
      ...node.data.category
    ];

    const newCtx = Object.assign( {}, node.ctx, {
      category: category,
      currentCategoryCode: node.data.currentCategoryCode,
      social: node.data.meta.social
    } );
    return applyNext( { ctx: newCtx } );
  })
)
