document.getElementById('click-link').onclick = function(){
    document.getElementById('click-container').style.display="none";
    document.getElementById('stylesheet').href="public/css/images.css";
    makeFullscreen();
    $(document).blur();
};

// setInterval(
//   function(){
//       checkOrientation();
//     }, 500);

// function checkOrientation(){
//     console.log(document.getElementById('click').text);
//     if(window.innerHeight > window.innerWidth){
//       document.getElementById('click').style.display="none";
//       document.getElementById('rotate').style.display="block"
//     } else {
//       document.getElementById('rotate').style.display="none"
//       document.getElementById('click').style.display="block";
//     }
// }


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
