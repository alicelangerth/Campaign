// Används inte eftersom vi inte använder Instagrams officiella API, samma som för auth.php


(function($) {
    'use strict'
    
    function getAccessToken() {
        var cookies = '; '+ document.cookie;
        var parts = cookies.split('; access_token=');
        var token = parts.length === 2 ? parts.pop().split(';').shift() : null;
        return token;
    }
    
    function getImages() {
        var url = "https://api.instagram.com/v1/users/self/media/recent/?";
        var accessToken = getAccessToken();
        
        $.ajax( {
            url: url,
            data: {
                access_token:accessToken
            },
            dataType: 'jsonp',
            success: function(resp) {
                
                for(var i in resp.data) {
                    
                    var img = $('<img>');
                    img.attr('src', resp.data[i].images.low_resolution.url );
                    $('#pictures').append(img);
                    
                }    
            }
        });
    };
    
    $(function(){
        // är användaren authentiserad mot instagram?
         if (getAccessToken()) {
             
            // Det finns en token
            getImages();
            $('#login').hide();
            
         } else {
             // Användaren har inte authentiserat
            $('#login').show();
         } ;
    });
    
    
}(jQuery));