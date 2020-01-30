var m = moment();
var h = moment().hour()
console.log('hour :', h);
moment().hour()///tells you the hour that is currently
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
if (h == 9){
    col2.addClass("present");
}
else if (h<9){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);//append all 3 columns to the row
$(".container").append(row); //append row to container
var row9Text = localStorage.getItem('rowText9')
var saveBtn = $('.saveBtn');
var text9 = $('#text9');
text9.val(row9Text);

saveBtn.on('click',function(){
    var textValue = text9.val();
    console.log(textValue);
    localStorage.setItem('rowText9', textValue);
    console.log(this);  
});

// localStorage.getItem.innerHTML("textarea", "text9");
// text9.innerHTML = localStorage.getItem(""); 
// text9.innerText = localStorage.getItem("textarea")
// localStorage.getItem("input");
// text9.innerText += text9.value
// localStorage.setItem("input", text9.value);


console.log(localStorage);
console.log(text9);
console.log(saveBtn);







///10am row//////////////////////
var row = $(`<div data-time='10' id='10' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '10am' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text10 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=10><i class="fas fa-save"></i></button>');
if (h == 10){
    col2.addClass("present");
}
else if (h<10){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row10Text = localStorage.getItem('rowText10')
var saveBtn = $('.saveBtn');
var text10 = $('#text10');
text10.val(row10Text);

saveBtn.on('click',function(){
    var textValue = text10.val();
    console.log(textValue);
    localStorage.setItem('rowText10', textValue);
    console.log(this);  
});


// 11am row
var row = $(`<div data-time='11' id='11' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '11am' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text11 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=11><i class="fas fa-save"></i></button>');
if (h == 11){
    col2.addClass("present");
}
else if (h<11){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row11Text = localStorage.getItem('rowText11')
var saveBtn = $('.saveBtn');
var text11 = $('#text11');
text11.val(row11Text);

saveBtn.on('click',function(){
    var textValue = text11.val();
    console.log(textValue);
    localStorage.setItem('rowText11', textValue);
    console.log(this);  
});


// 12pm row
var row = $(`<div data-time='12' id='12' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '12pm' + '</p>');
var col2 = $('<div class="past col-sm-9 "><textarea id=text12 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=12><i class="fas fa-save"></i></button>');
if (h == 12){
    col2.addClass("present");
}
else if (h<12){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row12Text = localStorage.getItem('rowText12')
var saveBtn = $('.saveBtn');
var text12 = $('#text12');
text12.val(row12Text);

saveBtn.on('click',function(){
    var textValue = text12.val();
    console.log(textValue);
    localStorage.setItem('rowText12', textValue);
    console.log(this);  
});


// 1pm row
var row = $(`<div data-time='1' id='1' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '1pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text1 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=1><i class="fas fa-save"></i></button>');
if (h == 13){
    col2.addClass("present");
}
else if (h<13){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row1Text = localStorage.getItem('rowText1')
var saveBtn = $('.saveBtn');
var text1 = $('#text1');
text1.val(row1Text);

saveBtn.on('click',function(){
    var textValue = text1.val();
    console.log(textValue);
    localStorage.setItem('rowText1', textValue);
    console.log(this);  
});

// 2pm row
var row = $(`<div data-time='2' id='2' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '2pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text2 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=2><i class="fas fa-save"></i></button>');
if (h == 14){
    col2.addClass("present");
}
else if (h<14){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row2Text = localStorage.getItem('rowText2')
var saveBtn = $('.saveBtn');
var text2 = $('#text2');
text2.val(row2Text);

saveBtn.on('click',function(){
    var textValue = text2.val();
    console.log(textValue);
    localStorage.setItem('rowText2', textValue);
    console.log(this);  
});

// 3pm row
var row = $(`<div data-time='3' id='3' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '3pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text3 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=3><i class="fas fa-save"></i></button>');
if (h == 15){
    col2.addClass("present");
}
else if (h<15){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row3Text = localStorage.getItem('rowText3')
var saveBtn = $('.saveBtn');
var text3 = $('#text3');
text3.val(row3Text);

saveBtn.on('click',function(){
    var textValue = text3.val();
    console.log(textValue);
    localStorage.setItem('rowText3', textValue);
    console.log(this);  
});

// 4pm row
var row = $(`<div data-time='4' id='4' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '4pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text4 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=4><i class="fas fa-save"></i></button>');
if (h == 16){
    col2.addClass("present");
}
else if (h<16){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row4Text = localStorage.getItem('rowText4')
var saveBtn = $('.saveBtn');
var text4 = $('#text4');
text4.val(row4Text);

saveBtn.on('click',function(){
    var textValue = text4.val();
    console.log(textValue);
    localStorage.setItem('rowText4', textValue);
    console.log(this);  
});

// 5pm row
var row = $(`<div data-time='5' id='5' class="row">`);
var col1 = $('<div class="col-sm-1"> <p class="hour">' + '5pm' + '</p>');
var col2 = $('<div class="past col-sm-9"><textarea id=text5 class="eventarea"></textarea>'); 
var col3 = $('<div class="col-sm-2"><button class="saveBtn" id=5><i class="fas fa-save"></i></button>');
if (h == 17){
    col2.addClass("present");
}
else if (h<17){
    col2.addClass("future");
}
row.append(col1);
row.append(col2);
row.append(col3);
$(".container").append(row);
var row5Text = localStorage.getItem('rowText5')
var saveBtn = $('.saveBtn');
var text5 = $('#text5');
text5.val(row5Text);

saveBtn.on('click',function(){
    var textValue = text5.val();
    console.log(textValue);
    localStorage.setItem('rowText5', textValue);
    console.log(this);  
});
});


