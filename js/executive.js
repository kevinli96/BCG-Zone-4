$(window).on("load", function() {
    loadAll()
});

function loadAll() {
  $.get("executive/executive_table.html", function(data) {
    $(data).appendTo("#executiveTable")
    $('#executiveTable table').removeClass().addClass("table table-hover table-list-search")
    $('#executiveTable table thead').removeClass().addClass("thead-inverse")
    $('#executiveTable table thead tr').removeClass()
    // email = $("#executiveTable table tbody tr td:nth-child(4)").html();
    // $("#executiveTable table tbody tr td:nth-child(4)").html("<a href='" + email + "'>" + email + "dmartin111@shaw.ca</a>")
  })
  // .done(loadBusinessExecutive)
}

function loadBusinessExecutive() {
  $.get("executive/business_executive_table.html", function(data) {
    $(data).appendTo("#businessTable")
  })
}
