var thisScript = document.getElementById( 'artdocWidgetScript' );
var parent = thisScript.parentElement;
var iframe = document.createElement( 'iframe' );
var url = ( window.location.hash && window.location.hash.match(/^#url\=(.*)$/i) ) ? window.location.hash.match(/^#url\=(.*)$/i)[1] : false;
iframe.src = url || thisScript.dataset.url || 'https://artdoc.media/movie/';
iframe.width = '100%';
iframe.height = 500;
iframe.frameBorder = 0;
iframe.onload = ( function setIframeHeight( e ) {
  console.log('onload');
  iframe.scrollIntoView();
  var message = e.target.contentWindow.postMessage( 'iFrame', '*' );
} );

window.addEventListener( 'message', function ( event ) {
  console.log('get msg');
  if ( event.data.hasOwnProperty( 'FrameHeight' ) ) {
    iframe.style.height = event.data.FrameHeight + 'px';
  }
  if ( event.data.hasOwnProperty( 'FrameUrl' ) ) {
    window.location.hash = '#url' + event.data.FrameUrl;
  }
});

parent.insertBefore( iframe, thisScript.nextSibling );