const TEAM_SIZE = 3;

let loadTeam = (teamNo) => {
  $.get("teams/team" + teamNo + ".html", function(data) {
      $('.team' + teamNo).html(data);

      $("td").filter(function() {
        return $(this).text() === "A";
      }).css( "background-color", "#db9d97" );
      $("td").filter(function() {
        return $(this).text() === "H";
      }).css( "background-color", "#8ec199" );

      $('.team' + teamNo + " > table").addClass("table table-bordered table-hover")
  });

}
$(window).on("load", function() {
    for (var i = 1; i <= TEAM_SIZE; i++) {
      loadTeam(i);
    }

});
