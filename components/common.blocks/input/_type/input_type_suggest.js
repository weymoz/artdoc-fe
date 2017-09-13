modules.define('input', function(provide, Input) {

provide(Input.declMod({ modName: 'type', modVal: 'suggest' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
      }
    }
  }
}));

});
