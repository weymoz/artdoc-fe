block('list').elem('term').elemMod('movie', 'tvpg').content()(function(node) {
  return node._lang === 'en' ? 'TVPG' : 'Возрастной рейтинг';
});
