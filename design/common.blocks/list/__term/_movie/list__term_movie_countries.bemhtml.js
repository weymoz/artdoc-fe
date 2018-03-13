block('list').elem('term').elemMod('movie', 'countries').content()(function(node) {
  return node._lang === 'en' ? 'Country' : 'Страна создания';
});
