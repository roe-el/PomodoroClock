$(document).ready(function() {
    var breakCount = 5;
    var sessionCount = 25;
    var breakHistroy = 0;
    var sessionHistory = 0;

    var breakTimer = new Timer({
        tick: 1,
        ontick: function(sec) { console.log('interval', sec);
        $('#time').text(sec); },
        onstart: function() { console.log('timer started'); }
    });
    var sessionTimer = new Timer({
        tick: 1,
        ontick: function(sec) { console.log('interval', sec);
        $('#time').text(sec); },
        onstart: function() { console.log('timer started'); }
    });
    var sessionTime = 0;
    var breakTime = breakCount * 60;

    /*Break Add/Subtract button event listeners*/
    $('.break-add').on('click', function() {
        breakCount += 1;
        $('.break-num').text(breakCount);
    })
    $('.break-sub').on('click', function() {
        if (breakCount > 1) {
            breakCount -= 1;
            $('.break-num').text(breakCount);
        }
    })

    /*Session Add/Subtract button event listeners*/
    $('.session-add').on('click', function() {
        sessionCount += 1;
        $('.session-num').text(sessionCount);
    })
    $('.session-sub').on('click', function() {
        if (sessionCount > 1) {
            sessionCount -= 1;
            $('.session-num').text(sessionCount);
        }
    })

    /*Play and Reset button event listeners*/
    $('.play-btn').on('click', function() {
        breakHistory = breakCount;
        sessionHistory = sessionCount;
        sessionTime = sessionCount * 60;
        breakTime = breakCount *60;
        console.log(sessionTime);
        sessionTimer.start(sessionTime).on('end', function() {
            breakTimer.start(breakTime).on('end',function(){
            	console.log('Done');
            });
        })
    })
    $('.reset-btn').on('click', function() {
        breakCount = breakHistory;
        $('.break-num').text(breakCount);
        sessionCount = sessionHistory;
        $('.session-num').text(sessionCount);
    })
});
