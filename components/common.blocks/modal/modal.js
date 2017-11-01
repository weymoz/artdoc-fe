modules.define('modal', ['i-bem-dom', 'page'], function(provide, bemDom, Page) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._page = this.findParentBlock( Page );
      }
    },
    visible: {
      '*': function( modName, modVal ) {
        this._page.setMod( 'no-scroll', modVal )
      }
    }
  }
}));

});
