modules.define('select',
[ 'i-bem-dom', 'button', 'popup', 'menu', 'input' ],
function(provide, bemDom, Button, Popup, Menu, Input, Select ) {

provide(Select.declMod({ modName: 'type', modVal: 'suggest' }, {

  onSetMod: {
    js: {
      inited: function() {
        this._button = this.findChildBlock(Button);
        this._events(Button).on('click', this._onButtonClick, this);

        this._popup = this.findChildBlock(Popup).setAnchor(this._button);
        this._events(Popup).on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);

        this._menu = this._popup.findChildBlock(Menu);
        this._data = this._menu.getItems();
        
        this._events(this._menu)
          .on('change', this._onMenuChange, this)
          .on('item-click', this._onMenuItemClick, this)
          .on('item-hover', this._onMenuItemHover, this);

        this._isPointerPressInProgress = false;
        this._buttonWidth = null;

        this._suggest = this._popup.findChildBlock({ block: Input, modName: 'type', modVal: 'suggest' });

        this._suggest._domEvents().on( 'keyup', this._onSuggestInput.bind( this ) );

        this._domEvents( this._elem('header') ).on('click', () => { this._suggest._focus() } )
      }
    },
    'opened' : {
      '' : function() {
        this._domEvents(bemDom.doc).un('pointerpress', this._onDocPointerPress);
        // this._popup.delMod('visible');
      }
    },
  },

  _updateButton : function() {
    var checkedItems = this._getCheckedItems();

    this._button
      .toggleMod( 'checked', true, '', !!checkedItems.size() )
      .setText(
        this.params.text + ': ' +
        ( checkedItems.size() === 1
          ? checkedItems.get( 0 ).getText() // one checked
          : checkedItems.size() ? '(' + checkedItems.size() + ' выбрано)' // many checked
          : '') ); // none checked
  },

  _onSuggestInput: function() {
    let searchString = this._suggest.getVal();
    let result = this._data._entities.filter( elem => {
      return elem.getText().toLowerCase().indexOf( searchString ) > -1;
    });
    this._menu.setContent( result.map( item => item.domElem[0] ) )
  }

}));

});
