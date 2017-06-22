$(document).ready(function() {
    var breakCount = 5;
    var sessionCount = 25;
    /*Break Add/Subtract button event listeners*/
    $('.break-add').on('click', function() {
        breakCount += 1;
        $('.break-num').text(breakCount);
        console.log(breakCount);
    })
    $('.break-sub').on('click', function() {
            if (breakCount > 1) {
                breakCount -= 1;
                $('.break-num').text(breakCount);
            }
        })
        /*Session Add/Subtract button even listeners*/
    $('.session-add').on('click', function() {
        sessionCount += 1;
        $('.session-num').text(sessionCount);
        console.log(sessionCount);
    })
    $('.session-sub').on('click', function() {
        if (sessionCount > 1) {
            sessionCount -= 1;
            $('.session-num').text(sessionCount);
        }
    })

});
