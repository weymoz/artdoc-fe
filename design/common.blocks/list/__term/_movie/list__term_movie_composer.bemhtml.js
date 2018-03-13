block('list').elem('term').elemMod('movie', 'composer').content()(function(node) {
  return node._lang === 'en' ? 'Composer' : 'Композитор';
});
