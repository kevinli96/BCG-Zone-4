$(window).on("load", function() {
    $.get("roster_header.html", function(data) {
        $('body').prepend(data);
    });
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })

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
