modules.define('form', ['i-bem-dom'], function(provide, bemDom, Form) {

provide(bemDom.declBlock(Form, {

  _onSubmit: function( e/*, data*/ ) {

    e.preventDefault();

    this._emit( 'submit', this.getVal() );

    this.validate().then( fieldsStatuses => {
      if ( this.checkFields( fieldsStatuses ) ) {
        this._emit( 'success', this.getVal() );
      } else {
        this.getInvalidFields().then( invalidFields => {
          this._emit( 'error', this.getVal() );
          invalidFields[0].getControl().setMod( 'focused' );
        });
      }
    });
  }

}));

});
