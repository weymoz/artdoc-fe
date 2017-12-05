modules.define('header__search', ['i-bem-dom', 'BEMHTML', 'header', 'modal'], function(provide, bemDom, BEMHTML, Header, Modal) {

provide(bemDom.declElem('header', 'search', {
  onSetMod: {
    js: {
      inited: function() {

        this._domEvents().on('click touchstart', ( event ) => {
          event.preventDefault();
          this.setMod( 'active', !this.hasMod('active') );
          if (this.hasMod('active') ){
            this._anotherHeaderElem = this.findParentBlock(Header).findChildElem('show-menu');
            this._anotherHeaderElem.setMod('active', !this.hasMod('active'));
          }
        })
        this._modal = this.findParentBlock( Header ).findChildBlock( { block: Modal, modName: 'view', modVal: 'search' } );
      }
    },
    active: {
      '*': function(modName, modVal) {
        bemDom.update(
          this.domElem,
          modVal ?
          BEMHTML.apply([
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
            ]
          ) : BEMHTML.apply([
            {
              block: 'icon',
              mods: {
                symbol: 'search'
              }
            },
            {
              block: 'text',
              mods: {
                theme: 'artdoc-dark',
                size: 'l'
              },
              content: 'Поиск'
            }
            ]
          )
        );
        this._modal.setMod( 'visible', modVal );
      }
    }
  }
}));

});
