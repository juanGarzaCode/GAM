$(document).ready(function(){
    var acercaDe = $('#acercaDe').offset().top;

    $(window).scroll(function(){
        if($(this).scrollTop() >= 56){
            $('#menu').addClass('fixed-top nav-2');
        } else {
            $('#menu').removeClass('fixed-top nav-2');
        }
    });

    $(window).on('scroll', function(){
        if ( $(window).scrollTop()){
            $('.irArriba').slideDown(300);
        } else {
            $('.irArriba').slideUp(300);
        }
    });

    $('.irArriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

});