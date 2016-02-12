var imageBase64;
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
    agreed: uploadForm.agreed.checked,
    aboutHome: uploadForm.aboutHome.value,
    image: imageBase64
  };
  saveToDb(uploadObj);
});

function saveToDb(obj){
  var db = new Firebase("https://charlottemann2.firebaseio.com/");
  db.push(obj);
  $('#uploadForm')[0].reset();
  preview.src="";
//THANK YOU MODAL
}
