$(window).on("load", function() {
    loadAll()
    $("#searchForm").submit(function() { return false; });
});

function loadAll() {
  $.get("tables/executive-table.html", function(data) {
    $(data).appendTo("#zone4Executive")
    $('#zone4Executive table').removeClass().addClass("table table-hover table-list-search")
    $('#zone4Executive table thead').removeClass().addClass("thead-inverse")
    $('#zone4Executive table thead tr').removeClass()
    rows = $('#zone4Executive table tbody tr')
    console.log(rows.length)
    for (var i = 1; i <= rows.length; i++) {
         email = $("#zone4Executive table tbody tr:nth-child(" + i + ") td:nth-child(4)").html();
        $("#zone4Executive table tbody tr:nth-child(" + i + ") td:nth-child(4)").html("<a href=mailto:'" + email + "'>" + email + "</a>")
    }
   
  })
  .done(loadBusinessExecutive)
}

function loadBusinessExecutive() {
  $.get("tables/bw-executive-table.html", function(data) {
    $(data).appendTo("#businessTable")
    $('#businessTable table').removeClass().addClass("table table-hover table-list-search")
    $('#businessTable table thead').removeClass().addClass("thead-inverse")
    $('#businessTable table thead tr').removeClass()
    rows = $('#businessTable table tbody tr')
    for (var i = 1; i <= rows.length; i++) {
         email = $("#businessTable table tbody tr:nth-child(" + i + ") td:nth-child(5)").html();
        $("#businessTable table tbody tr:nth-child(" + i + ") td:nth-child(5)").html("<a href=mailto:'" + email + "'>" + email + "</a>")
    }
  })
}
