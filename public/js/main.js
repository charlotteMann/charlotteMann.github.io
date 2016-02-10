
// Find the right method, call on correct element
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Launch fullscreen for browsers that support it!
launchIntoFullscreen(document.documentElement); // the whole page
(function(){
    function launchIntoFullscreen(element) {
        console.log("launchintofullscreen");
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    document.addEventListener("click", function(){
        //window full screen tonen
        launchIntoFullscreen(document.documentElement);
        //window niet meer focussen (zorgt dat melding niet meer op scherm komt wanneer er over 2de window wordt gehovered
        $(document).blur();
    }, true);
})();
