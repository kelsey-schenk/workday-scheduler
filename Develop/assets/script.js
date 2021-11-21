$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    let currentTime = moment().hour();
    $('.description').each(function(){
        // parseInt = look in the string for an integer
        var hourId = parseInt($(this).prop('id'));
        console.log(hourId + " this is hourId");
        if (hourId > currentTime) {
            $(this).addClass('future');
        } else if (hourId < currentTime) {
            $(this).addClass('past');
        } else if(hourId === currentTime) {
            $(this).addClass('present');
        }
    });
    console.log(currentTime);

