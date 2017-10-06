modules.define('form', ['button'], function(provide, Button, Form) {

  provide(Form.declMod({ modName: 'has-validation', modVal: true }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply(this, arguments);
          if ( this._elem('submit') ) {
            this._elem('submit').findMixedBlock(Button)
              .setMod('disabled', false);
          }
          // this._domEvents().on('change', this._check.bind(this) );
        }
      }
    },

    _onSubmit : function(e) {
      e.preventDefault();
      this._emit('submit', this.getVal());
    
      this.getMessage().hide();
      this.validate()
        .then( fieldsStatuses => {
          if( this.checkFields( fieldsStatuses ) ) {
            this._emit( 'success', this.getVal() );
            this.getMessage().hide();
          } else {
            this._emit( 'error', this.getVal() );
            // this.setMessageVal( this._concatMessages( fieldsStatuses ) );
            // this.getMessage().show();
            this.getInvalidFields()
              .then( invalidFields => {
                invalidFields[0].getControl().setMod( 'focused' );
              });
          }
        });
    },

    _concatMessages: fieldsStatuses => {
      let messages = [];
      for( let i = 0, l = fieldsStatuses.length; i < l; i++ ) {
        if( fieldsStatuses[ i ] !== null ) {
          messages.push([
            fieldsStatuses[ i ][ 'field' ],
            ': ',
            fieldsStatuses[ i ][ 'message' ]
          ].join(''));
        }
      }
      return messages.join( '<br>' );
    }
  }));

});