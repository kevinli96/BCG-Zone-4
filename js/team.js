const home_string = "H to";
const away_string = "A at";

const TEAM_SIZE = 3;

let loadTeam = (teamNo) => {
    $.get("tables/team" + teamNo + ".html", function(data) {
        $('.team' + teamNo).html(data);

        $("td").filter(function() {
            return $(this).text() === away_string;
        }).css("background-color", "#db9d97");
        $("td").filter(function() {
            return $(this).text() === home_string;
        }).css("background-color", "#8ec199");

        $("th").css("font-family", "Open Sans, sans-serif")
        $("td").css("font-family", "Open Sans, sans-serif")

        $('.team' + teamNo).css({
            "height": "450px",
            "overflow-y": "auto"
        })
        $('.team' + teamNo + " > table").removeClass().addClass("table table-bordered table-hover table-fixed")
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