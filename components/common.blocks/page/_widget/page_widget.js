modules.define('page', function(provide, Page) {

provide(Page.declMod({ modName: 'widget', modVal: true }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );

        window.addEventListener('message', function (event) {
            
            // Need to check for safty as we are going to process only our messages
            // So Check whether event with data(which contains any object) contains our message here its "FrameHeight"
           if (event.data == "FrameHeight") {

                //event.source contains parent page window object 
                //which we are going to use to send message back to main page here "abc.com/page"
                
                //parentSourceWindow = event.source;
                
                //Calculate the maximum height of the page
                var body = document.body, html = document.documentElement;
                var height = Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
               
               // Send height back to parent page "abc.com/page"
                event.source.postMessage({ "FrameHeight": height }, "*");       
            }
        });

      }
    }
  }
}));

});
