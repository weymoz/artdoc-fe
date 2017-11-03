var thisScript = document.getElementById( 'artdocWidgetScript' );
var parent = thisScript.parentElement;
var iframe = document.createElement( 'iframe' );
iframe.src = thisScript.dataset.url || 'https://artdoc.media/movie/';
iframe.width = '100%';
iframe.height = 0;
iframe.frameBorder = 0;
var setIframeHeight = function ( event ) {
  if ( event ) {
    iframe.scrollIntoView();
  }
  var height = iframe.contentWindow.postMessage( 'FrameHeight', '*' );
};
setIframeHeight();
iframe.addEventListener( 'load', setIframeHeight );

parent.insertBefore( iframe, thisScript.nextSibling );

window.addEventListener( 'message', function ( event ) {
  if ( event.data.hasOwnProperty( 'FrameHeight' ) ) {
    iframe.style.height = event.data.FrameHeight + 'px';
  }
});