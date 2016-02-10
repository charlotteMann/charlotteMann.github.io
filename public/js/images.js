var i=1;

setInterval(
  function(){
    if(i<=2){
    changeImg(i++);
    } else {
      i=1;
    }
  }, 3000);

function changeImg(i){
  document.getElementById("image-slide").src = "../../images/img"+i+".jpeg";
}
