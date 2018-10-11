$(window).on("load", function() {
  $(function(){
    $('.nav-tabs li a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
        
        if ($("#myScrollSpy").length > 0) {
          console.log("here")
          $('#myScrollSpy').scrollspy('refresh'); 

        }

    });
});
    loadAll()
});

function loadAll() {
  $.get("tournaments/zone34.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#zone34")
  })
  .done(loadJunior)
  .done(loadBusinessWomen)
  .done(loadProvincial)
  .done(loadPastResults)
}

function loadJunior() {
  $.get("tournaments/junior-girls.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#junior")
  })
}

function loadBusinessWomen() {
  $.get("tournaments/business-women.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#business-women")
  })
}

function loadProvincial() {
  $.get("tournaments/provincial.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#provincial")
  })
}

function loadPastResults() {
  $.get("tournaments/past-results.html", function(data) {
    $(data).appendTo("#past-results")
    // $(".tournamentBody").attr("data-spy", "scroll").attr("data-target", "#myScrollSpy")
  })
}
