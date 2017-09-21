(function($){
    
    // Get user position
    function getUserPosition() {
        return $(window).scrollTop();
    }

    $(window).scroll(function(){

        let scrollTop = getUserPosition();

        // Top position for each section
        let infoTop = $('#info').offset().top;
        let coachellaTop = $('#coachella').offset().top;

        // Elemets to animate
        let infoImg = $('img.info-img');
        let textBlock = $('div.animated-text');
        let imgBlock = $('div.img-block');

        // Animation for info section
        if (scrollTop > (infoTop - 300)) {
            infoImg.css({'margin-top': '0', 'opacity': '1'});
        } else if (scrollTop < (infoTop - 400)) {
            infoImg.css({'margin-top': '300px', 'opacity': '0'});
        }

        // Animation for coachella section
        if (scrollTop > (coachellaTop - 150)) {
            textBlock.addClass('slide-in');
        } else if (scrollTop < (coachellaTop - 500)) {
            textBlock.removeClass('slide-in');
        }

    });

})(jQuery);


