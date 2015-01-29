
var playerData;

$(document).ready(function() {
    getData();
});

function getData() {
  $.getJSON("carlosgomez.json", function(data, error) {
    playerData = data;
    drawStuff();
  });

    function drawStuff() {

      var playerName = playerData.name;
      var playerClub = playerData.club;

      var playerStat = playerData.stats;
      var lastSeason = playerStat.length -1;

      var lastSeasonstats = playerData.stats[lastSeason];

      var seasonAtBats = lastSeasonstats.AB;
      var seasonYear = lastSeasonstats.year;
      var seasonClub = lastSeasonstats.club;

        $(".chart").append("<h2>"+playerName+"</h2>");
        $(".chart").append("<h3>"+playerClub+"</h3>");
        $(".chart").append("<p>"+playerName+" had "+seasonAtBats+" at bats for the "+seasonClub+" in "+seasonYear+".</p>");

  }

};
