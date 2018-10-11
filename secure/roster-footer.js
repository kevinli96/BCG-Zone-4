$(window).on("load", function() {
  $.get('../footer.html', function(data) {
    $('body').append(data);
  });
});
