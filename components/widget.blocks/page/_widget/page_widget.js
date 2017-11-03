modules.define('page_widget', function(provide, Page) {

provide(Page.declMod({ modName: 'widget', modVal: true }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        window.addEventListener('message', function (event) {
          if (event.data == "FrameHeight") {
            const body = document.body, 
                  html = document.documentElement,
                  height = Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
           
            event.source.postMessage({ "FrameHeight": height }, "*");       
          }
        });
      }
    }
  }
}));

});
