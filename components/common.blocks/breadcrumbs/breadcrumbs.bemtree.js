block('breadcrumbs').match( node => node.data && node.data.url && node.data.url.pathname ).def()( node => {
  return applyNext( { 'ctx.url': node.data.url.pathname } )
});
