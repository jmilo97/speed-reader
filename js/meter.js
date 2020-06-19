$(document).ready(function () {
    length = (($('#text').text()).split(' ')).length;
    var count = 0;
    var timer = $.timer(function () {
        ++count;
    });
    timer.set({ time: 1000 });

    $('#begin').click(function () { 
        timer.play();
        
    });
    $('#finish').click(function () { 
        timer.stop();
        wpm = length/(count / 60);
        $('#text').text(Math.floor(wpm));
        
    });
});