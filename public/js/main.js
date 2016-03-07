
document.getElementById('click-link').onclick = function(){
    document.getElementById('click-container').style.display="none";
    document.getElementById('stylesheet').href="public/css/images.css";
    makeFullscreen();
    $(document).blur();
};

screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
if (screen.lockOrientationUniversal("landscape-primary")) {
  console.log("orientation was locked");
} else {
  console.log("orientation lock failed");
}

function  makeFullscreen() {
  elem = document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
}
document.getElementById('image-container').onclick = function () {
  console.log("close");
    exitFullscreen();
};

function exitFullscreen(){
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
