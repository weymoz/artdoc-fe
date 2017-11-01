modules.define('header__search', ['i-bem-dom', 'header', 'modal'], function(provide, bemDom, Header, Modal) {

provide(bemDom.declElem('header', 'search', {
  onSetMod: {
    js: {
      inited: function() {
        this._domEvents().on('click', () => { this.setMod( 'active', !this.hasMod('active') ) })
        this._modal = this.findParentBlock( Header ).findChildBlock( { block: Modal, modName: 'view', modVal: 'search' } );
      }
    },
    active: {
      '*': function(modName, modVal) {
        bemDom.update(
          this.domElem,
          modVal ? 'Закрыть' : 'Поиск'
        );
        this._modal.setMod( 'visible', modVal );
      }
    }
  }
}));

});
