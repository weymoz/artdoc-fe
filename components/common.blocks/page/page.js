modules.define('page', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply( this, arguments );
            }
        }
    }
}));

});
