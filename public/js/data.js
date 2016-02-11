var db = new Firebase("https://charlottemann.firebaseio.com/");

db.on("value",function(snapshot){
  var uploadsObj = snapshot.val();
  var uploadsArray = Object.keys(uploadsObj);

  var uploadsHtml = uploadsArray.reduce(function(html,uploadId){
  var uploadsList = uploadsObj[uploadId];
    return html+=uploadsList.name;
  }, "");
    document.getElementById('data-spiel').innerHTML=uploadsHtml;
    console.log(uploadsHtml);
}, errorHandler);


function errorHandler(errorObject) {
  console.log("the read failed: "+errorObject.code);
}
