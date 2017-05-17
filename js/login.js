$(function() {
  $('#loginButton').on('click', handleSubmit);
});

function handleSubmit() {
  let user = $('#username').val();
  let pass = $('#password').val();

  if (user = "golfgal" && pass == "W0menl0veg0lf") {
    // window.location = "secure/rosters.html";
    $('#incorrectPass').remove();
  } else {
    $('#password').after(`<p id="incorrectPass" style="color: red"> Username or password is incorrect. </p>`)
  }
  return false;

}
