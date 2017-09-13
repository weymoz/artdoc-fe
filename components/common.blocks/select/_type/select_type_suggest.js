modules.define('select',
[ 'i-bem-dom', 'button', 'popup', 'menu', 'input' ],
function(provide, bemDom, Button, Popup, Menu, Input, Select ) {

provide(Select.declMod({ modName: 'type', modVal: 'suggest' }, {

  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._updateButton();

        this._data = this._menu.getItems();
        this._suggest = this._popup.findChildBlock({ block: Input, modName: 'type', modVal: 'suggest' });

        if ( this._suggest ) {
          this._suggest._domEvents().on( 'keyup', this._onSuggestInput.bind( this ) );
          this._domEvents( this._elem('header') ).on('click', () => { this._suggest._focus() } )
        }
      }
    },
    'opened' : {
      '' : function() {
        this._domEvents(bemDom.doc).un('pointerpress', this._onDocPointerPress);
      }
    },
  },

  _updateButton : function() {
    var checkedItems = this._getCheckedItems();
    this._button
      .toggleMod( 'checked', true, '', !!checkedItems.size() )
      .setText(
        this.params.text +
        ( checkedItems.size() === 1
          ? ': ' + checkedItems.get( 0 ).getText() // one checked
          : checkedItems.size() ? ': (' + checkedItems.size() + ' выбрано)' // many checked
          : '') ); // none checked
  },

  _onSuggestInput: function() {
    let searchString = this._suggest.getVal();
    let result = this._data._entities.filter( elem => {
      return elem.getText().toLowerCase().indexOf( searchString ) > -1;
    });
    this._menu.setContent( result.map( item => item.domElem[0] ) )
  },

  _updateMenuWidth : function() {
    this._popup.redraw();
  }

}));

});
