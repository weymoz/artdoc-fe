modules.define('header__title', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('header', 'title', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
