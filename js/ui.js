$(document).ready(function () {
    $('#reader, #meter, #about').addClass('hidden');

    $('#homei').click(function () { 
        $('#reader, #meter, #about').addClass('hidden');
        $('#home').removeClass('hidden');
    });
    $('#readeri').click(function () { 
        $('#home, #meter, #about').addClass('hidden');
        $('#reader').removeClass('hidden');
    });
    $('#meteri').click(function () { 
        $('#home, #reader, #about').addClass('hidden');
        $('#meter').removeClass('hidden');
    });
    $('#abouti').click(function () { 
        $('#home, #meter, #reader').addClass('hidden');
        $('#about').removeClass('hidden');
    });
});