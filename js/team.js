const TEAM_SIZE = 3;

let loadTeam = (teamNo) => {
    $.get("tables/team" + teamNo + ".html", function(data) {
        $('.team' + teamNo).html(data);

        $("td").filter(function() {
            return $(this).text() === "A";
        }).css("background-color", "#db9d97");
        $("td").filter(function() {
            return $(this).text() === "H";
        }).css("background-color", "#8ec199");


        $('.team' + teamNo).css({
            "height": "450px",
            "overflow-y": "auto"
        })
        $('.team' + teamNo + " > table").addClass("table table-bordered table-hover table-fixed")
        $('.team' + teamNo + " > table > tbody > tr > td:first-child").css({
            "background-color": "#f0f6cc"
        })
    });

}

function loadInfoTab() {
  $("#team").append($("#team1").html())
  $("#team").append($("#team2").html())
  $("#team").append($("#team3").html())
}

$(window).on("load", function() {
    loadInfoTab();
    for (var i = 1; i <= TEAM_SIZE; i++) {
        loadTeam(i);
    }

});