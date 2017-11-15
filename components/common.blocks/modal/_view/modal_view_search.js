modules.define('modal', ['input'], function(provide, Input, Modal) {

provide(Modal.declMod({ modName: 'view', modVal: 'search' }, {
  onSetMod: {
    visible: {
      '*': function( modName, modVal ) {
        this.__base.apply( this, arguments );
        this
          .findChildBlock( { block: Input, modName: 'type', modVal: 'search' } )
          .setMod('focused', modVal);
      }
    }
  }
}));

});
