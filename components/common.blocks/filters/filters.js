modules.define('filters', ['i-bem-dom', 'checkbox', 'select'], function(provide, bemDom, Checkbox, Select) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        const selects = this.findChildBlocks(Select);
        const checkboxes = this.findChildBlocks(Checkbox);
        this._events( selects ).on('change', this.search, this );
        this._events( checkboxes ).on('change', this.search, this );
      }
    }
  },

  search: function() {
    this.domElem.submit();
  }
}));

});
