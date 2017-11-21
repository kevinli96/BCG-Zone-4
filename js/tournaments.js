$(window).on("load", function() {
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
  $.get("tournaments/junior_girls.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#junior")
  })
}

function loadBusinessWomen() {
  $.get("tournaments/business_women.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#business_women")
  })
}

function loadProvincial() {
  $.get("tournaments/provincial.html", function(data) {
    $(data).appendTo("#all")
    $(data).appendTo("#provincial")
  })
}

function loadPastResults() {
  $.get("tournaments/past_results.html", function(data) {
    $(data).appendTo("#past_results")
  })
}