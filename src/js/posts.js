(function(){

    const mostRecent = document.querySelector('.most-recent .posts');
    const topList = document.querySelector('.top-list .posts');
    const jsonTopList = './json/toplist.json';
    const jsonMostRecent = './json/mostrecent.json';

    // Fetch request file
    function fetchRequest() {
        fetch('./php/request.php')
        .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    }

    // Fetch results from json files
    function fetchResults(filename, element) {
        fetch(filename)
        .then(function(result) {
            return result.json();
        }).then(function(result) {
            displayResults(result, element);
        });
    }

    // Get random number based on max & min
    function getRandomInt(min, max, unit) {
        return Math.floor(Math.random() * (max - min + 1)) + min + unit;
    }

    function aLittleBitRandomness(number) {
        return (number + (4.5 * (Math.random()+1)) + 's');
    }

    // Set animation duration and z-index based on image height
    function speed(height, images) {

        if (height < 100) {

            images.style.animationDuration = aLittleBitRandomness(100);
            images.style.zIndex = '1';

        } else if (height < 190) {

            images.style.animationDuration = aLittleBitRandomness(80);
            images.style.zIndex = '2';

        } else if (height > 190 && height < 230) {

            images.style.animationDuration = aLittleBitRandomness(60);
            images.style.zIndex = '3';

        } else if (height > 230 && height < 270) {

            images.style.animationDuration = aLittleBitRandomness(40);
            images.style.zIndex = '4';

        } else {

            images.style.animationDuration = aLittleBitRandomness(20);
            images.style.zIndex = '5';

        }
    }

    // Save info about img in array for later use
    var moreInfo = [];

    // Display result in HTML element
    function displayResults(result, element) {

      var options = {
            marginTop: {
                min: 10,
                max: 100,
                unit: '%'
            },
            marginDesktop: {
                min: 0,
                max: 30,
                unit: '%'
            },
            height: {
                min: 60,
                max: 300,
                unit: 'px'
            },
            animationDelay: {
                min: -20,
                max: 0,
                unit: 's'
            }
      };

        var currentImg;
        var imgArr;

        // Clear results
        element.innerHTML = '';

        for(let i = 0; i < 9; i++) {

            element.innerHTML += `<div class="single">
                                      <img src="${result[i].thumbnail_src}">
                                  </div>`;

            // Save post content in array
            imgArr = element.querySelectorAll('.single');
            currentImg = imgArr[i];
            moreInfo.push([result[i].thumbnail_src, result[i].caption, result[i].comments.count, result[i].code, result[i].likes.count]);

            // Set random styles
            currentImg.style.height = getRandomInt(options.height.min, options.height.max, options.height.unit);

            if(window.innerWidth > 768) {
                currentImg.style.marginTop = getRandomInt(options.marginDesktop.min, options.marginDesktop.max, options.marginDesktop.unit);
            } else {
                currentImg.style.marginTop = getRandomInt(options.marginTop.min, options.marginTop.max, options.marginTop.unit);
            }


            currentImg.style.animationDelay = getRandomInt(options.animationDelay.min, options.animationDelay.max, options.animationDelay.unit);

            // Check current image height to set speed
            var imageHeight = window.getComputedStyle(currentImg, null).getPropertyValue('height');
            speed(imageHeight.slice(0, -2), currentImg);

      }

    }

    // Choose neccessary elements for pop up window
    var popupDiv = document.querySelector('.pop-up');
    var overlay = document.querySelector('.overlay');

    // Display more info in pop up window
    function showImageContent() {

        var popupImages = document.querySelectorAll('.single');

        for(let i = 0; i < popupImages.length; i++) {

            popupImages[i].addEventListener('click', function() {

                var img = popupImages[i].querySelector('img');
                overlay.className = 'overlay visible';

                if(img.src === moreInfo[i][0]) {

                    var caption = '';
                    var captionJson = moreInfo[i][1];
                    var instaLink = `https://instagram.com/p/${moreInfo[i][3]}`;

                    // Display caption if not empty
                    if(captionJson !== undefined) {

                        // Set limit to long captions
                        if (captionJson.length > 248) {

                            captionJson = captionJson.slice(0, 248);
                            captionJson += `<a href="${instaLink}" target="_blank"> ...</a>`;

                        }
                        caption = `<p>${captionJson}</p>`;
                    }

                    popupDiv.innerHTML += `<a href="${instaLink}" target="_blank">
                                                <img src="${moreInfo[i][0]}" alt="Post thumbnail">
                                            </a>
                                            ${caption}
                                            <a href="${instaLink}" target="_blank">
                                                <i class="fa fa-heart-o" aria-hidden="true"></i><p class="data">${moreInfo[i][4]}</p>
                                            </a>
                                            <a href="${instaLink}" target="_blank">
                                                <i class="fa fa-comment-o" aria-hidden="true"></i><p class="data">${moreInfo[i][2]}</p>
                                            </a>
                                            <div class="link"><a href="${instaLink}" target="_blank">View on Instagram</a><div class="hover"></div></div>`;

                }

            });

        }

    }

    // If esc key is pressed, close pop up window
    document.onkeydown = function(evt) {

        evt = evt || window.event;

        if (evt.keyCode == 27) {

            overlay.className = 'overlay';
            popupDiv.innerHTML = '';

        }

    };

    // Close pop up window on click
    overlay.addEventListener('click', function(evt) {

        if (overlay.className === 'overlay visible') {

            overlay.className = 'overlay';
            popupDiv.innerHTML = '';

        }

    });

    // Make sure elements are loaded
    function waitForElement(className, callback){

        var checkIfReady = setInterval(function(){

            if(document.querySelectorAll(className)){

                clearInterval(checkIfReady);
                callback();

            }

        }, 100);

    }

    waitForElement('.single', showImageContent);

    fetchResults(jsonTopList, topList);
    fetchResults(jsonMostRecent, mostRecent);

    // Get latest info from instagram
    setInterval(function() {

        fetchRequest();
        fetchResults(jsonTopList, topList);
        fetchResults(jsonMostRecent, mostRecent);

    },(1000 * 60 * 2) );
})();
