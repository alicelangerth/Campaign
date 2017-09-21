(function($){

    //DESKTOP NAVIGATION
    // Scroll indicator - On click

    // Select all links with hashes
    $('a[href*="#"]').click(function(event) {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && location.hostname == this.hostname) {

            // Find element to scroll to
            let target = $(this.hash);
            let targetName = target[0].id;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            //Update url
            if (window.history.pushState) {
               window.history.pushState(targetName, targetName, '#' + targetName);
            }

            //Hide main-nav if in section: home and footer
            hideNav(targetName);

            // Highlight active section
            $("a").removeClass('active');
            $(this).hasClass('active');

            //Set smooth scroll
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);

        }

    });

    // Hide navigation
    function hideNav(element) {
        
        var mainNav = $('.main-nav.desktop');
        var toTop = $('a.to-top');

        if(element === 'home') {

            mainNav.css('visibility', 'hidden');
            toTop.css('visibility', 'hidden');

        } else if (element === 'footer') {

            mainNav.css('visibility', 'hidden');
            toTop.css('visibility', 'visible');

        } else {
            setTimeout(function() {

                mainNav.css('visibility', 'visible');
                toTop.css('visibility', 'visible');
            },100);
            
        }

    }

    // Scroll indicator - On scroll

    var currentPage;

    //Get user position
    function getUserPosition() {
        return $(window).scrollTop();
    }

    //Get element positions
    function elementPositions() {

        let scrollTop = getUserPosition();

        // Top position for each section
        let infoTop = $('#info').offset().top;
        let topListTop = $('#top-list').offset().top;
        let coachellaTop = $('#coachella').offset().top;
        let mostRecentTop = $('#most-recent').offset().top;
        let footerTop = $('footer').offset().top;

        // Scroll marker for each section
        let homeMarker = $('.desktop > .nav-items > a.nav-item.home');
        let infoMarker = $('.desktop > .nav-items > a.nav-item.info');
        let topListMarker = $('.desktop > .nav-items > a.nav-item.top-list');
        let coachellaMarker = $('.desktop > .nav-items > a.nav-item.coachella');
        let mostRecentMarker = $('.desktop > .nav-items > a.nav-item.most-recent');

        // Check current section
        if (scrollTop > (footerTop - 600)) {
            
            hideNav('footer');

        } else if (scrollTop > (mostRecentTop - 200)) {

            currentElement('most-recent', mostRecentMarker);
            hideNav('most-recent');

        } else if (scrollTop > (coachellaTop - 200)) {

            currentElement('coachella', coachellaMarker);
            hideNav('coachella');

        } else if (scrollTop > (topListTop - 200)) {

            currentElement('top-list', topListMarker);
            hideNav('top-list');

        } else if (scrollTop > (infoTop - 200)) {

            currentElement('info', infoMarker);
            hideNav('info');

        } else if (scrollTop < (infoTop - 200)) {

            currentElement('home', homeMarker);
            hideNav('home');

        } 

    }

    //Highlight marker for current element
    function currentElement($el, $marker) {

        $('a.nav-item').removeClass('active');
        $marker.addClass('active');
        currentUrl($el);

    }

    //Change url to current element
    function currentUrl(element) {

        if (element === currentPage) {
            return false;
        }

        currentPage = element;

        if (window.history.pushState) {
            window.history.pushState(element, element, '#' + element);
        }

    }

    $(window).on('scroll', elementPositions);


    //MOBILE NAVIGATION

    //Change menu depending on browser width
    function setMenu() {

        let mainNav = $('.main-nav');
        let browserWidth = $(window).width();

        if (browserWidth >= 1200) {

            //Use desktop menu
            mainNav.removeClass('mobile');
            mainNav.addClass('desktop');

        } else {

            //Use mobile menu
            mainNav.removeClass('desktop');
            mainNav.addClass('mobile');

        }

    }

    $(window).on('load resize scroll', setMenu);

    //Close menu when a section is selected
    $('.main-nav.mobile a').on('click', function() {
        $('#menu').prop('checked', false);
    });

})(jQuery);
