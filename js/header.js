$(window).on("load", function() {
    $.get("header.html", function(data) {
      $('body').prepend(data);
    });
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
});