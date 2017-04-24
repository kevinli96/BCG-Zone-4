const TEAM_SIZE = 3;

let loadTeam = (teamNo) => {
  $.get("teams/team" + teamNo + ".html", function(data) {
      $('.team' + teamNo).html(data);
  });

}
$(window).on("load", function() {
    for (var i = 1; i <= TEAM_SIZE; i++) {
      loadTeam(i);
    }
});
