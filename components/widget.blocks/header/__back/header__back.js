modules.define('header__back', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('header', 'back', {
  onSetMod: {
    js: {
      inited: function() {
        this._domEvents().on('click', () => { history.back() });
      }
    }
  }
}));

});
