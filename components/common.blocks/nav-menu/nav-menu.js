modules.define('nav-menu', ['i-bem-dom', 'dropdown', 'page', 'header'], function(provide, bemDom, navMenu, Page, Header) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._menu = this.findParentBlock( Page )
                  .findChildBlock( Header )
                  .findChildBlock( { block: navMenu, modName: 'nav-menu', modVal: true } );
                  this._domEvents( this._elem('close') ).on('click', this._openMenu );
            }
        }
    },

    _openMenu: function () {
      console.log('hello');
      console.log(this._menu);
      this._menu.delMod('opened');
    }
}));

});
