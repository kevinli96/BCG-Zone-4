$(function() {
  $('#loginButton').on('click', handleSubmit);
});

function handleSubmit() {
  let user = $('#username').val();
  let pass = $('#password').val();

  if (user = "golfgal" && pass == "W0menl0veg0lf") {
    window.location = "rosters.html";
  }
  return false;

}
