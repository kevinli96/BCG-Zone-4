$(window).on("load", function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
    $.get("header.html", function(data) {
      if (page === "index.html") {
        $(data).hide().prependTo("body").slideDown(1500);
      } else {
        $(data).hide().prependTo("body").fadeIn(1500)
      }
        // $('body').prepend(data);
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })
    });

    function scrollToAnchor() {
        var title = $(".title");
        offset = window.innerHeight - 775
        if (title.offset() != undefined) {
            console.log("scrolling down: " + (title.offset().top + 225 + offset) + "px")
            } 
        if (title.length > 0) {
            $('html,body').animate({
                scrollTop: title.offset().top + 225+ offset*0.
            }, 1500);
        }
    }

    // console.log($(window).width())
    if ($(window).width() > 768) {
        scrollToAnchor();
    }

});
