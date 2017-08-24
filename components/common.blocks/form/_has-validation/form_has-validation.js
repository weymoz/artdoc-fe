modules.define('form', function(provide, Form) {

  provide(Form.declMod({ modName: 'has-validation', modVal: true }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply(this, arguments);

          this._domEvents().on('submit', this._check.bind(this) );
          this._domEvents().on('change', this._check.bind(this) );
        }
      }
    },

    _check: function() {
      this.validate()
        .then(function(fieldsStatuses) {
          if(this.checkFields(fieldsStatuses)) {
            this.getMessage().hide();
          } else {
            this.setMessageVal(this._concatMessages(fieldsStatuses));
            this.getMessage().show();
            this.getInvalidFields()
            .then(function (invalidFields) {
              invalidFields[0].getControl().setMod('focused');
            });
          }
        }.bind(this));
    },

    _concatMessages : function(fieldsStatuses) {
      var messages = [];
      for(var i = 0, l = fieldsStatuses.length; i < l; i++) {
        if(fieldsStatuses[i] !== null) {
          messages.push([
            fieldsStatuses[i]['field'],
            ': ',
            fieldsStatuses[i]['message']
            ].join(''));
        }
      }
      return messages.join('<br>');
    }
  }));

});