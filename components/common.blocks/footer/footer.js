modules.define('footer',

['i-bem-dom', 'list'],

function(provide, bemDom, List) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                let titleBtn = this.findChildElems('title');
                this._domEvents(titleBtn).on('click', (event) => {
                  if(window.innerWidth < 426){
                    if(event.bemTarget.findParentElem('for-viewers')){
                      if(this.findChildElem('for-professionals').findChildBlock(List).hasMod('show', true)){
                        this.findChildElem('for-professionals').findChildBlock(List).setMod('show', false)
                      }
                      this.findChildElem('for-viewers').findChildBlock(List).toggleMod('show');
                    } else {
                      if(this.findChildElem('for-viewers').findChildBlock(List).hasMod('show', true)){
                        this.findChildElem('for-viewers').findChildBlock(List).setMod('show', false)
                      }
                      this.findChildElem('for-professionals').findChildBlock(List).toggleMod('show');
                    }
                  }
                })
            }
        }
    }
}));

});
