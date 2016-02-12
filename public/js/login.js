var db = new Firebase("https://charlottemann2.firebaseio.com/");

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  var email=loginForm.elements.email.value;
  var pw=loginForm.elements.password.value;
  validateRestLoginDetails(email,pw);
});

function clearInvalidLoginMsg(){
  $("#incorrect-p")[0].innerHTML = "";
}

var validateRestLoginDetails = function(email,pw){
  db.authWithPassword({
    email    : email,
    password : pw
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      $("#incorrect-p")[0].innerHTML = "Incorrect email address or password!";
    } else {
      console.log("Authenticated successfully with payload:", authData);
      // localStorage.setItem('RUID',authData.auth.uid);
      window.location.replace('./data.html');
    }
  });
};
