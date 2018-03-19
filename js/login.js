
String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
console.log("golfgal".hashCode())

$(function() {
  $('#loginButton').on('click', handleSubmit);
  console.log("loading")
});

function handleSubmit() {
  let user = $('#username').val();
  let pass = $('#password').val();


  $('#incorrectPass').remove();
  if (user.hashCode() === 204315440 && pass.hashCode() === -1885494666) {
    window.location = "secure/rosters.html";
    console.log("correct password")
  } else {
    $('#password').after(`<p id="incorrectPass" style="color: red"> Username or password is incorrect. </p>`)
  }
  return false;

}
