modules.define('header',

['i-bem-dom', 'button'],

function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                let langSwitch = this.findChildElem('lang').findChildBlock(Button);
                langSwitch._domEvents().on('click', () => {
                  event.preventDefault();
                  let originalUrl = window.location.href;
                  let parsedUrl = originalUrl.split('/');
                  let lang = parsedUrl[3];
                  var regV = new RegExp(lang);
                  let newRoute;
                  if(lang === 'en'){
                    newRoute = originalUrl.replace(regV,'ru');
                  } else {
                    newRoute = originalUrl.replace(regV,'en');
                  }
                  window.location.href = newRoute;
                })

            }
        }
    }
}));

});
