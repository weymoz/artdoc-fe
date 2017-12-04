modules.define('modal', ['input'], function(provide, Input, Modal) {

provide(Modal.declMod({ modName: 'view', modVal: 'mobile-menu' }, {
  onSetMod: {
    visible: {
      '*': function( ) {
        this.__base.apply( this, arguments );
      }
    }
  }
}));

});
