modules.define('page', ['i-bem-dom'], function(provide, bemDom) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function() {
            this.__base.apply(this, arguments);
            console.log('init widget');
            window.addEventListener('message', function(event) {
              console.log('remote msg');
              console.log(event.data);

              if (event.data.hasOwnProperty('FrameUrl')) {
                window.location.pathname = event.data.FrameUrl.replace(
                  '#url=',
                  ''
                );
              }

              if (event.data == 'iFrame') {
                let body = document.body,
                  html = document.documentElement,
                  height = Math.max(
                    body.scrollHeight,
                    body.offsetHeight,
                    html.clientHeight,
                    html.scrollHeight,
                    html.offsetHeight
                  );

                console.log(
                  'iFrame.location.pathname',
                  window.location.pathname
                );
                console.log('iFrame height', height);
                event.source.postMessage(
                  {
                    FrameHeight: height,
                    FrameUrl: window.location.pathname
                  },
                  '*'
                );
              }
            });
          }
        }
      }
    })
  );
});
