var db = new Firebase("https://charlottemann2.firebaseio.com/");

var uid = localStorage.getItem('UID');

(function load(){
if (uid){
  getDb();
}  else {
  window.location.replace('./login.html');
  }
})();

function getDb(){
  db.on("value",function(snapshot){
    var uploadsObj = snapshot.val();
    var uploadsArray = Object.keys(uploadsObj);

    var uploadsHtml = uploadsArray.reduce(function(html,uploadId){
    var uploadsList = uploadsObj[uploadId];
      return html+=
      "<img class='upload-image' src="+uploadsList.image+"></img><p class='upload-name'><b>Name: </b>"+uploadsList.name +"</p>"+"<p class='upload-email'><b>Email: </b>"+"<a href='mailto:"+uploadsList.email +"'>"+uploadsList.email+"</a></p>"+"</p>"+"<p class='upload-yourHome'><b>Their home: </b>"+uploadsList.yourHome +"</p>"+"<p class='upload-agreed'><b>If no, the person agreed to take part: </b>"+uploadsList.agreed +"</p>"+"<p class='upload-aboutHome'><b>About the home: </b>"+uploadsList.aboutHome +"</p><br>";
    }, "");
      document.getElementById('data-spiel').innerHTML=uploadsHtml;
  }, errorHandler);
}

function logout(){
	  localStorage.removeItem('UID');
    window.location.replace('./login.html');
}

function errorHandler(errorObject) {
  console.log("the read failed: "+errorObject.code);
}
