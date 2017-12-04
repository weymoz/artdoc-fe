modules.define('header__show-menu', ['i-bem-dom', 'header', 'modal'], function(provide, bemDom, Header, Modal) {

provide(bemDom.declElem('header', 'show-menu', {
  onSetMod: {
    js: {
      inited: function() {

        this._domEvents().on('click', ( event ) => {
          console.log('hello');
          event.preventDefault();
          this.setMod( 'active', !this.hasMod('active') );
        })
        this._modal = this.findParentBlock( Header ).findChildBlock( { block: Modal, modName: 'view', modVal: 'mobile-menu' } );
      }
    },
    active: {
      '*': function(modName, modVal) {
        bemDom.update(
          this.domElem,
          modVal ? 'Закрыть' : 'Меню'
        );
        this._modal.setMod( 'visible', modVal );
      }
    }
  }
}));

});
