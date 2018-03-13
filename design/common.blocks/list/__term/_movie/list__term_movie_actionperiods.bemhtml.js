block('list').elem('term').elemMod('movie', 'actionperiods').content()(function(node) {
  return node._lang === 'en' ? 'Period of action' : 'Время действия';
});
