modules.define('dropdown', ['header'],  function(provide, Header, Dropdown) {

provide(Dropdown.declMod({ modName: 'anchor', modVal: 'header' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._switcher = this.findParentBlock( Header );
      }
    }
  }
}));

});
