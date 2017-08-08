$(window).on("load", function() {
    $.get("header.html", function(data) {
      $(data).hide().prependTo("body").fadeIn(2000);
        // $('body').prepend(data);
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })
    });

    function scrollToAnchor() {
        var title = $(".title");
        if (title.length > 0) {
            $('html,body').animate({
                scrollTop: title.offset().top + 225
            }, 'slow');
        }
    }

    console.log($(window).width())
    if ($(window).width() > 768) {
        scrollToAnchor();
    }

});
