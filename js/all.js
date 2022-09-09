$(document).ready(function () {
        /* index */
        $('.f-btn').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop:$('.feature').offset().top}, 700);
        });

        $('.c-btn').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop:$('.chef').offset().top}, 700);
        });

        $('.m-btn').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop:$('.reservation').offset().top}, 700);
        });

	$('.showmenu').click(function (event) {
        event.preventDefault();
        $('.showmenu').toggleClass('active');
        $('body').toggleClass('menu-show');
        });
        
        /* cart */
        $('.product_1').click(function (event) {
                event.preventDefault();
                $(this).find('.clicked').toggle();
        });
        $('.product_2').click(function (event) {
                event.preventDefault();
                $(this).find('.clicked').toggle();
        });
        $('.product_3').click(function (event) {
                event.preventDefault();
                $(this).find('.clicked').toggle();
        });
        $('.product_4').click(function (event) {
                event.preventDefault();
                $(this).find('.clicked').toggle();
        });
});