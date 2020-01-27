var m = moment();
console.log(m);
var currentDay = document.getElementById('currentDay');

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function(){
/////9am row///////////////////////////////////////
var row = $(`<div data-time=9 id='9' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '9am' + '</p>');//column 1 is the hour 
var col2 = $(`<div class="col-sm-9 past"><textarea id=text9 class="eventarea"></textarea>`);   //column 2 is the text area
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=9><i class="fas fa-save"></i></button>`)//column 3 is the save button
row.append(col1);
row.append(col2);
row.append(col3);//append all 3 columns to the row
$(".container").append(row); //append row to container

///10am row//////////////////////
var row = $(`<div data-time='10' id='10' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '10am' + '</p>');
var col2 = $('<div class="col-sm-9 past"><textarea id=text10 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=10><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);

// 11am row
var row = $(`<div data-time='11' id='11' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '11am' + '</p>');
var col2 = $('<div class="col-sm-9 past"><textarea id=text11 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=11><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);


// 12pm row
var row = $(`<div data-time='11' id='12' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '12pm' + '</p>');
var col2 = $('<div class="col-sm-9 past"><textarea id=text12 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=12><i class="fas fa-save"></i></button>');
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);


var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);
    console.log(this);

});});
