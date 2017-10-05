modules.define('form', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    _onSubmit: function() {
      this.__base.apply( this, arguments );
      this.domElem[0].submit();
    }
}));

});
