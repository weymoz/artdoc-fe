modules.define('dropdown', ['header'],  function(provide, Header, Dropdown) {

provide(Dropdown.declMod({ modName: 'nav-menu', modVal: true }, {
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
