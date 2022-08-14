$(document).ready(function () {
    $('.box-media').css('animation', 'up_down_media 10s infinite');
    setInterval(() => {
        $('.box-media').css('animation', 'none');
        setInterval(() => {
            $('.box-media').css('animation', 'up_down_media_mid 10s infinite');
        }, 10000);
    }, 10000);
    setTimeout(() => {
        $('body').removeClass('element_disabled');
        $('.logo').addClass('magictime spaceInDown');
        setTimeout(() => {
            $('.text').removeClass('element_disabled');
            $('.text').addClass('magictime puffIn');
            
        }, 1200);
    }, 500);

    var mode_back = null;

    $('.text-left').click(function (e) {
        mode_back = 1;
        $('.text-left').removeClass('magictime puffIn');
        $('.text-left').addClass('magictime puffOut');
        setTimeout(() => {
            $('.info-list').addClass('magictime slideUpReturn');
            $('.info-list').removeClass('element_disabled');
            $('.logo').removeClass('spaceInDown');
            $('.logo').addClass('slideRight');
            $('body').css('background-image', '-webkit-linear-gradient(30deg, #00cea8 70%, #252525 50%)');
            $('.text-right').addClass('puffOut');
            $('.btn-back').addClass('magictime slideDownReturn');
            $('.btn-back').removeClass('element_disabled');
        }, 50);
    });

    $('.text-right').click(function (e) {
        mode_back = 2;
        $('.text-right').removeClass('magictime puffIn');
        $('.text-right').addClass('magictime puffOut');
        setTimeout(() => {
            $('.box-vip').addClass('magictime slideUpReturn');
            $('.box-vip').removeClass('element_disabled');

            $('.logo').removeClass('spaceInDown');
            $('.logo').addClass('slideLeft');
            $('body').css('background-image', '-webkit-linear-gradient(30deg, #00cea8 30%, #252525 30%)');
            $('.text-left').addClass('puffOut');
            $('.btn-back').addClass('magictime slideDownReturn');
            $('.btn-back').removeClass('element_disabled');
        }, 50);
    });

    $('.btn-back').click(function (e) {
        if (mode_back == 1) {
            $('.info-list').removeClass('slideUpReturn');
            $('.info-list').addClass('slideLeft');
            $('.btn-back').addClass('spaceOutUp');
            $('.btn-back').removeClass('slideDownReturn');
            setTimeout(() => {
                $('body').css('background-image', '-webkit-linear-gradient(30deg, #00cea8 50%, #252525 50%)');
                $('.logo').removeClass('slideRight');
                $('.text-left').removeClass('puffOut');
                $('.text-left').addClass('puffIn');
                $('.text-right').removeClass('puffOut');
                $('.text-right').addClass('puffIn');
                $('.info-list').addClass('element_disabled');
                $('.btn-back').addClass('element_disabled');
            }, 800);
            mode_back = null;
        } else {
            $('.box-vip').removeClass('slideUpReturn');
            $('.box-vip').addClass('slideRight');
            $('.btn-back').addClass('spaceOutUp');
            $('.btn-back').removeClass('slideDownReturn');
            $('.logo').addClass('vanishOut');
            setTimeout(() => {
                $('body').css('background-image', '-webkit-linear-gradient(30deg, #00cea8 50%, #252525 50%)');
                $('.logo').removeClass('slideLeft');
                $('.logo').removeClass('vanishOut');
                $('.logo').addClass('vanishIn');
                $('.text-left').removeClass('puffOut');
                $('.text-left').addClass('puffIn');
                $('.text-right').removeClass('puffOut');
                $('.text-right').addClass('puffIn');
                $('.info-list').addClass('element_disabled');
                $('.btn-back').addClass('element_disabled');
            }, 800);
            mode_back = null;
        }
    });

});