var todayDate = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').html(todayDate);


$(document).ready(function (){  //page loads
    $('.saveBtn').on('click', function(){
        console.log(this);      //gets nearby values
        var text = $(this).siblings('description').val(); //takes change from sibling html description
        var time = $(this).parent().attr('id'); // taken the change from the parent id attribute

        localStorage.setItem(time, text)
    })
})


$('#hour1.description').val(localStorage.getItem('hour1'));
$('#hour2.description').val(localStorage.getItem('hour2'));
$('#hour3.description').val(localStorage.getItem('hour3'));
$('#hour4.description').val(localStorage.getItem('hour4'));
$('#hour5.description').val(localStorage.getItem('hour5'));
$('#hour6.description').val(localStorage.getItem('hour6'));
$('#hour7.description').val(localStorage.getItem('hour7'));
$('#hour8.description').val(localStorage.getItem('hour8'));
$('#hour9.description').val(localStorage.getItem('hour9'));
$('#hour10.description').val(localStorage.getItem('hour10'));
$('#hour11.description').val(localStorage.getItem('hour11'));
$('#hour12.description').val(localStorage.getItem('hour12'));
//loads saved Data to localStorage


function hourTracker () {
    var currentHour = moment().hour();
// gets the current hour

    $('.time-block').each(function(){
        var blockHour = parseInt($(this).attr('id').split('hour')[1]);
        console.log(blockHour, currentHour)
        // loops the time blocks

        if (blockHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future')
            $(this).removeClass('present')
        }
        else if (blockHour === currentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
            $(this).removeClass('future')
        } 
        else {
            $(this).removeClass('present')
            $(this).removeclass('past')
            $(this).addClass('future')
        }
    })
    hourTracker();

}