var i=2;

changeImg(1);

setInterval(
  function(){
    if(i<=4){
      changeImg(i++);
      console.log(i);
    } else {
        i=1;
        changeImg(i);
        console.log(i);
    }
  }, 3000);

function changeImg(i){
  // document.getElementById("image-slide").src = "./images/img"+i+".jpg";
  document.body.style.backgroundImage="url('./images/img"+i+".jpg')";
}
