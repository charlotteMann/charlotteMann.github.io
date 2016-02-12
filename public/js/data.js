var db = new Firebase("https://charlottemann.firebaseio.com/");

db.on("value",function(snapshot){
  var uploadsObj = snapshot.val();
  var uploadsArray = Object.keys(uploadsObj);

  var uploadsHtml = uploadsArray.reduce(function(html,uploadId){
  var uploadsList = uploadsObj[uploadId];
    return html+=
    "<img class='upload-image' src="+uploadsList.image+"></img><p class='upload-name'>Name: "+uploadsList.name +"</p>"+"<p class='upload-email'>Email: "+"<a href='mailto:"+uploadsList.email +"'>"+uploadsList.email+"</a></p>"+"</p>"+"<p class='upload-yourHome'>Their home: "+uploadsList.yourHome +"</p>"+"<p class='upload-agreed'>If no, the person agreed to take part: "+uploadsList.agreed +"</p>"+"<p class='upload-aboutHome'>About the home: "+uploadsList.aboutHome +"</p>";
  }, "");
    document.getElementById('data-spiel').innerHTML=uploadsHtml;
    console.log(uploadsHtml);
}, errorHandler);


function errorHandler(errorObject) {
  console.log("the read failed: "+errorObject.code);
}
