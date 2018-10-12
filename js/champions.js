$(window).on("load", function() {
    loadAll()
});

function loadAll() {
  $.get("tables/past-champs-amateur.html", function(data) {
    $(data).appendTo("#amateurChampions")
  })
  .done(loadJunior)
  .done(loadSenior)
  .done(loadSeniorZ4)
  .done(load24ballZ34)
}

function loadJunior() {
  $.get("tables/past-champs-junior.html", function(data) {
    $(data).appendTo("#juniorChampions")
  })
}

function loadSenior() {
  $.get("tables/past-champs-senior-Z34.html", function(data) {
    $(data).appendTo("#seniorChampionsZ34")
  })
}

function loadSeniorZ4() {
  $.get("tables/past-champs-senior-Z4.html", function(data) {
    $(data).appendTo("#seniorChampionsZ4")
  })
}

function load24ballZ34() {
  $.get("tables/past-champs-24ball-Z34.html", function(data) {
    $(data).appendTo("#24ballZ34")
  })
}
