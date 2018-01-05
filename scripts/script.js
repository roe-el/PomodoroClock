$(document).ready(function() {
    var breakCount = 5;
    var sessionCount = 25;
    var breakHistory = 0;
    var sessionHistory = 0;
    var sessionTime = 0;
    var breakTime = breakCount * 60;
    var paused = false;
    var ding = new Audio("ding.mp3");
    /*Break Add/Subtract button event listeners*/
    $('.break-add').on('click', function() {
        breakCount += 1;
        $('.break-num').text(breakCount);
    });
    $('.break-sub').on('click', function() {
        if (breakCount > 1) {
            breakCount -= 1;
            $('.break-num').text(breakCount);
        }
    });

    /*Session Add/Subtract button event listeners*/
    $('.session-add').on('click', function() {
        sessionCount += 1;
        $('.session-num').text(sessionCount);
    });
    $('.session-sub').on('click', function() {
        if (sessionCount > 1) {
            sessionCount -= 1;
            $('.session-num').text(sessionCount);
        }
    });

    /*Play button event listener*/
    $('.play-btn').on('click', function() {
        if (paused === true){
            sessionTimer.start();
            breakTimer.start();
            paused = false;
        }
        else{
        breakHistory = breakCount;
            sessionHistory = sessionCount;
            sessionTime = sessionCount * 60;
            breakTime = breakCount * 60;
        //Change color of text when new timer is started.
        if ($('#min-zero,#min-time,#zero,#sec-time,#colon').hasClass('red')) {
            $('#min-zero,#min-time,#zero,#sec-time,#colon').removeClass('red');
        }
        //Change color of text when session timer begins.
        $('#min-zero,#min-time,#zero,#sec-time,#colon').addClass('blue');
        sessionTimer.start(sessionTime).on('end', function() {
            //Change color of text when session timer ends and break begins.
            $('#min-zero,#min-time,#zero,#sec-time,#colon').removeClass('blue');
            $('#min-zero,#min-time,#zero,#sec-time,#colon').addClass('red');
            ding.play();
            breakTimer.start(breakTime).on('end', function() {
                //Change text back to 00:00:00 at end of break session.
                $('#min-zero,#min-time,#zero,#sec-time').text('0');
                ding.play();
            });
        });

    }

    });
    $('.stop-btn').on('click', function() {
            sessionTimer.stop();
            breakTimer.stop();
            paused = false;
             $('#min-zero,#min-time,#zero,#sec-time').text('0');
        });
    $('.pause-btn').on('click', function() {
        if(sessionTimer.getStatus() !== "stopped" && breakTimer.getStatus() !== "stopped"){
        sessionTimer.pause();
        breakTimer.pause();
        paused = true;
    }
    });
        //Creates object for breakTimer with keys for different options
    var breakTimer = new Timer({
        tick: 1,
        ontick: function(sec) {
            //Sets zero if minutes is under 10
            if ((Math.floor(sec / 60000)) < 10) {
                $('#min-zero').text('0');
            } else {
                $('#min-zero').text('');
            }
            //Sets minute time
            $('#min-time').text(Math.floor(sec / 60000));
            //If statements for zero on second timer
            if (((sec / 1000) % 60) < 9) {
                $('#zero').text('0');
            } else {
                $('#zero').text('');
            }
            //Seting seconds on the timer
            $('#sec-time').text(Math.round(sec / 1000) % 60);
        }

        
    });
    //Creates object for sessionTimer with keys for different options
    var sessionTimer = new Timer({
        tick: 1,
        ontick: function(sec) {
            //Sets zero if minutes is under 10
            if ((Math.floor(sec / 60000)) < 10) {
                $('#min-zero').text('0');
            } else {
                $('#min-zero').text('');
            }
            //Sets minute time
            $('#min-time').text(Math.floor(sec / 60000));
            //If statements for zero on second timer
            if (((sec / 1000) % 60) < 9) {
                $('#zero').text('0');
            } else {
                $('#zero').text('');
            }
            //Seting seconds on the timer
            $('#sec-time').text(Math.round(sec / 1000) % 60);
        }
    });
});
