modules.define('page-club',
  ['i-bem-dom', 'button'],
  function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              let showOther = this.findChildElem('hidden');
              this._domEvents('make-party').on('click', (event) => {
                  let currentButton = event.bemTarget.findMixedBlock(Button);
                  if( showOther.hasMod('hide')) {
                    showOther.setMod('hide', false);
                    currentButton.setText('Скрыть участников');
                  } else {
                    showOther.setMod('hide', true);
                    currentButton.setText('Показать участников');
                  }
                });
            }
        }
    }
}));

});
