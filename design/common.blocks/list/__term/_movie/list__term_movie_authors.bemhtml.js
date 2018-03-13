block('list').elem('term').elemMod('movie', 'authors').content()(function(node) {
  return node._lang === 'en' ? 'Author' : 'Автор';
});
