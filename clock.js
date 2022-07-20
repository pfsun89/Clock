const m = moment();

var day = m.format("dddd");
var today = m.format("MMMM Do YYYY, h:mm:ss a");

// Display today's date on html page
var intervalSeconds = setInterval(function() {
    $("#date").html(day + " " + today + " " + moment().format("hh:mm:ssa"));
});