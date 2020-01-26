var m = moment();
console.log(m);
var currentDay = document.getElementById('currentDay');

$("#currentDay").text(moment().format("dddd, MMMM Do"));

