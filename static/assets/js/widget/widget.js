var thisScript = document.getElementById('artdocWidgetScript');
var parent = thisScript.parentElement;
var iframe = document.createElement('iframe');
iframe.src = thisScript.dataset.url || 'https://artdoc.media/movie/';
iframe.width = '100%';
iframe.height = 0;
iframe.frameBorder = 0;
iframe.onload = (function setIframeHeight(e) {
  var height = e.target.contentWindow.postMessage("FrameHeight", "*");   
})
parent.insertBefore(iframe, thisScript.nextSibling);

window.addEventListener('message', function (event) {
  if (event.data.hasOwnProperty("FrameHeight")) {
    iframe.style.height = event.data.FrameHeight + 'px';
  }
});