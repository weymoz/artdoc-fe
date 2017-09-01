modules.define('card-movie__play-status-countdown', ['i-bem-dom', 'BEMHTML'], function(provide, bemDom, BEMHTML) {

provide(bemDom.declElem('card-movie', 'play-status-countdown', {
    onSetMod: {
        js: {
            inited: function() {
              let timerContainer = this.domElem[0];
              var countDownDate = new Date( Date.now() + this.params.starts_in * 1000 ).getTime();

              var timer = setInterval( () => {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                var minute = 1000 * 60;
                var hour = minute * 60;

                var days = Math.floor( distance / ( 24 * hour ) );
                var hours = Math.floor( ( distance % ( 24 * hour ) ) / hour );
                var minutes = this.fixZero( Math.floor( ( distance % hour ) / minute ) );
                var seconds = this.fixZero( Math.floor( ( distance % minute ) / 1000 ) );

                if ( days > 0 ) {
                  days = [
                    days,
                    ' ',
                    BEMHTML.apply({
                      block : 'text',
                      mods: {
                        plural: true
                      },
                      content : {
                        number: days,
                        one: 'день',
                        two: 'дня',
                        five: 'дней'
                      }
                    }),
                    ', '
                  ].join('')
                }

                timerContainer.innerHTML = days + hours + ':' + minutes + ':' + seconds;

                if ( distance < 0 ) {
                  clearInterval( timer );
                  timerContainer.innerHTML = '…';
                  window.location = window.location;
                }
              }, 200);
            }
        }
    },

    fixZero: function( number ) {
      return number < 10 ? '0' + number : number
    }
}));

});

