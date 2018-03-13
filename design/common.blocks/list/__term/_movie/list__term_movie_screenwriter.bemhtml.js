block('list').elem('term').elemMod('movie', 'screenwriter').content()(function(node) {
  return node._lang === 'en' ? 'Screenwriter' : 'Сценарист';
});
