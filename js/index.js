console.log("Your index.js is loaded correctly!");

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $("#back-to-top").click(function() {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });
});