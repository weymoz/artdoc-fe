block('list').elem('term').elemMod('movie', 'actioncities').content()(function(node) {
  return node._lang === 'en' ? 'Place of action' : 'Город действия';
});
