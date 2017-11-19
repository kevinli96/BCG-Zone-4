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


      $('.team' + teamNo).css({"height":"450px", "overflow-y":"auto"})
      $('.team' + teamNo + " > table").addClass("table table-bordered table-hover table-fixed")
      $('.team' + teamNo + " > table > tbody > tr > td:first-child").css({
        "background-color": "#f0f6cc"
      })
  });

}
$(window).on("load", function() {
    for (var i = 1; i <= TEAM_SIZE; i++) {
      loadTeam(i);
    }

});

// .table > thead:first-child > tr:first-child > th:first-child {
//   position: absolute;
//   display: inline-block;
//   background-color: red;
//   height: 100%;
// }
//
// .table > tbody > tr > td:first-child {
//     position: absolute;
//     display: inline-block;
//     background-color: red;
//     height: 100%;
// }
//
// .table > thead:first-child > tr:first-child > th:nth-child(2) {
//     padding-left: 40px;
// }
//
// .table > tbody > tr > td:nth-child(2) {
//     padding-left: 50px !important;
// }
