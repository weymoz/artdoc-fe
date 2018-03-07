modules.define('header__show-menu', ['i-bem-dom', 'BEMHTML', 'header', 'modal'], function(provide, bemDom, BEMHTML, Header, Modal) {

provide(bemDom.declElem('header', 'show-menu', {
  onSetMod: {
    js: {
      inited: function() {
        this._domEvents().on('click touchstart', ( event ) => {
          event.preventDefault();
          this.setMod( 'active', !this.hasMod('active') );
          if (this.hasMod('active')){
            this._anotherHeaderElem = this.findParentBlock(Header).findChildElem('search')
            this._anotherHeaderElem.setMod('active', !this.hasMod('active'));
          }
        })
        this._modal = this.findParentBlock( Header ).findChildBlock( { block: Modal, modName: 'view', modVal: 'mobile-menu' } );
      }
    },
    active: {
      '*': function(modName, modVal) {
        bemDom.update(
          this.domElem,
          modVal ?
            BEMHTML.apply(
              {
                block: 'icon',
                mods: {
                  symbol: 'times'
                }
              },
              {
                block: 'text',
                mods: {
                  theme: 'artdoc-dark',
                  size: 'l'
                },
                content: 'Закрыть'
              }
            ) : BEMHTML.apply(
              {
                block: 'icon',
                mods: {
                  symbol: 'burger'
                }
              },
              {
                block: 'text',
                mods: {
                  theme: 'artdoc-dark',
                  size: 'l'
                },
                content: 'Меню'
              }
            )
        );
        this._modal.setMod( 'visible', modVal );
      }
    }
  }
}));

});
