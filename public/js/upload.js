var imageBase64="none.jpeg";
var preview = document.querySelector('img'); //selects the query named img

function previewFile(){
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
      preview.src = reader.result;
      imageBase64=reader.result;
  };
  if (file){
    console.log(reader.result);
      reader.readAsDataURL(file);
      //reads the data as a URL
  } else {
    console.log("nothing");
      preview.src = "";
  }
  document.getElementById('previewPic').style.display="block";
}

// previewFile();

document.getElementById('uploadForm').addEventListener('submit', function(e){
  e.preventDefault();
  var uploadObj={
    name: uploadForm.name.value,
    email: uploadForm.email.value,
    yourHome: uploadForm.yourHome.checked,
    whosHome:uploadForm.whosHome.value,
    agreed: uploadForm.agreed.checked,
    aboutHome: uploadForm.aboutHome.value,
    image: imageBase64
  };
  validation(uploadObj, saveToDb);
  // saveToDb(uploadObj);
});

function validation(uploadObj,callback){
  var pattern=/\S+@\S+\.\S+/;
  if(uploadObj.name===""||uploadObj.email===""||uploadObj.aboutHome===""){
    document.getElementById('validation').innerHTML="<strong>You must fill in all * fields to proceed</strong>";
  } else if(!uploadObj.email.match(pattern)){
	    document.getElementById('validation').innerHTML="<strong>Please enter a email address</strong>";
  } else {
    callback(uploadObj);
  }
}

function saveToDb(obj){
  var db = new Firebase("https://charlottemann2.firebaseio.com/");
  db.push(obj);
  $('#uploadForm')[0].reset();
  preview.src="";
  preview.style.height=0;
  displaySuccessBox();
//THANK YOU MODAL
}

function displaySuccessBox(){
  document.getElementById('validation').innerHTML=
  '<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">'+
  '&times;</a>'+
  '<strong>Thank you! </strong>'+
  'Your details have been successfully submitted.</div>';
}

document.getElementById('close').onclick = function () {
  console.log("close");
    // exitFullscreen();
    toggleFullscreen(this);
};
function exitFullscreen() {
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


function toggleFullscreen(elem) {
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
  } else {
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
}


// function exitFullscreen() {
//   if(document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if(document.mozCancelFullScreen) {
//     document.mozCancelFullScreen();
//   } else if(document.webkitExitFullscreen) {
//     document.webkitExitFullscreen();
//   }
// }
