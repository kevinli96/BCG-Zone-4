// home_string and away_string are the text of the cells that are highlighted green and red respectively

const home_string = "H to";
const away_string = "A at";
const numColumns = 11;
const borderWidth = 1;

// Do not modify below

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

        // adding coloring to second row (dates)
        $('.team' + teamNo + " > table > tbody > tr:first-child").each(function() {
            $(this).children('td').slice(1, 3).css("background-color", "#F0D7D6");
            $(this).children('td').slice(3, 5).css("background-color", "#E8EFD9");
            $(this).children('td').slice(5, 7).css("background-color", "#E2DBE9");
            $(this).children('td').slice(7, 9).css("background-color", "#D6EBF2");
            $(this).children('td').slice(9, 11).css("background-color", "#FDE7D5");
        });

        // Changing font to open sans, sans serif
        $("th").css("font-family", "Open Sans")
        $("td").css("font-family", "Open Sans")

        // setting the height of the table
        $('.team' + teamNo).css({
            "height": "450px",
            "overflow-y": "auto"
        })

        // Adding the header: merging the columns and then centering the text
        header = $('.team' + teamNo + " > table > thead > tr > th:first-child").html();
        $('.team' + teamNo + " > table > thead > tr").html("<th colspan=" + numColumns + ">" + header + "</th>")
        $('.team' + teamNo + " > table > thead > tr > th").css({
            "background-color": "#f0f6cc",
            "text-align":"center",
            "font-weight": "900"
        });


        $('.team' + teamNo + " > table").css("border", borderWidth + "px solid black");
        $('.team' + teamNo + " > table td").css("border", borderWidth + "px solid black");
        $('.team' + teamNo + " > table th").css("border", borderWidth + "px solid black");

        // adding bootstrap table classes
        $('.team' + teamNo + " > table").removeClass().addClass("table table-bordered table-hover table-fixed")

        // adding background color to first column
        $('.team' + teamNo + " > table > tbody > tr > td:first-child")
            .css({
                "background-color": "#f0f6cc",
                "font-weight": "900"
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