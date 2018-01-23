$(window).on("load", function() {
    loadAll()
});

function loadAll() {
  $.get("tables/past_champs_amateur.html", function(data) {
    $(data).appendTo("#amateurChampions")
  })
  .done(loadJunior)
  .done(loadSenior)
  .done(loadSenior_Z4)
  .done(load24ball_Z34)
}

function loadJunior() {
  $.get("tables/past_champs_junior.html", function(data) {
    $(data).appendTo("#juniorChampions")
  })
}

function loadSenior() {
  $.get("tables/past_champs_senior_Z34.html", function(data) {
    $(data).appendTo("#seniorChampions_Z34")
  })
}

function loadSenior_Z4() {
  $.get("tables/past_champs_senior_Z4.html", function(data) {
    $(data).appendTo("#seniorChampions_Z4")
  })
}

function load24ball_Z34() {
  $.get("tables/past_champs_24ball_Z34.html", function(data) {
    $(data).appendTo("#24ball_Z34")
  })
}
