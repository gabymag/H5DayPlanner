var m = moment();
console.log(m);
var currentDay = document.getElementById('currentDay');

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function(){
/////9am row///////////////////////////////////////    
var row = $(`<div data-time=9 id='9' class="row">`);
// create a column
var col1 = $('<div class="col-sm-2"> <p class="hour">' + '9am' + '</p>');
//create column 2
var col2 = $(`<div class="col-sm-8 past"><textarea id=text9 class="description" placeholder="Add your event here..."></textarea>`);   
//create column 3
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=9><i class="fas fa-save"></i></button>`)
// append col to row
row.append(col1);
row.append(col2);
row.append(col3);
// last step add rows to container
$(".container").append(row);

///10am row//////////////////////

var row = $(`<div data-time='9' id='10' class="row">`);

var col1 = $('<div class="col-sm-2"> <p class="hour">' + '10am' + '</p>');

var col2 = $(`<div class="col-sm-8 past"><textarea id=text10 class="description" placeholder="Add your event here..."></textarea>`);        
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=10><i class="fas fa-save"></i></button>`)

row.append(col1);
row.append(col2);
row.append(col3);

// last step add rows to container
$(".container").append(row);







var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);
    console.log(this);

});});
