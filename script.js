var m = moment();
console.log(m);
var saveBtn = $('.saveBtn');


// moment(displayDay).format('mm/dd/yyyy');

// var displayMoment = document.getElementById('displayDay');





$(document).ready(function(){
$("#displayWeekday").html(moment().format( "dddd"));
$("#displayDay").html(moment().format( "MMMM Do YYYY"));
/////9am row///////////////////////////////////////
var row = $(`<div data-time=9 id='9' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '9am' + '</p>');//column 1 is the hour 
var col2 = $(`<div class="past col-sm-9"><textarea id=text9 class="eventarea"></textarea>`);   //column 2 is the text area
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=9><i class="fas fa-save"></i></button>`)//column 3 is the save button
row.append(col1);
row.append(col2);
row.append(col3);//append all 3 columns to the row
$(".container").append(row); //append row to container

var saveBtn = $('.saveBtn');


 

saveBtn.on('click',localStorage.setItem("text9",("textarea")));
localStorage.getItem.innerHTML("textarea", "text9");
// document.getElementById("text9").innerHTML = localStorage.getItem("result"); 

console.log(localStorage);

///10am row//////////////////////
var row = $(`<div data-time='10' id='10' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '10am' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text10 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=10><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 11am row
var row = $(`<div data-time='11' id='11' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '11am' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text11 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=11><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);


// 12pm row
var row = $(`<div data-time='12' id='12' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '12pm' + '</p>');
var col2 = $('<div class="past col-sm-9 "><textarea id=text12 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=12><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);


// 1pm row
var row = $(`<div data-time='1' id='1' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '1pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text1 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=1><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 2pm row
var row = $(`<div data-time='2' id='2' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '2pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text2 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=2><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 3pm row
var row = $(`<div data-time='3' id='3' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '3pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text3 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=3><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 4pm row
var row = $(`<div data-time='4' id='4' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '4pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text4 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=4><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 5pm row
var row = $(`<div data-time='5' id='5' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '5pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text5 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=5><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);





});


