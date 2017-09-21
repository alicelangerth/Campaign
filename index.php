<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>COACHELLA MOMENTS</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <script src="https://use.fontawesome.com/a391b5c69b.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="main-nav desktop mobile">
        <input id="menu" type="checkbox">
        <label for="menu" class="menu">
            <span>Menu</span>
        </label> <!-- .menu -->
        <div class="nav-items">
            <a href="#home" class="nav-item home"><p><span>Home</span></p></a>
            <a href="#info" class="nav-item info"><p><span>Info</span></p></a>
            <a href="#top-list" class="nav-item top-list"><p><span>Top List</span></p></a>
            <a href="#coachella" class="nav-item coachella"><p><span>Coachella</span></p></a>
            <a href="#most-recent" class="nav-item most-recent"><p><span>Most Recent</span></p></a>
        </div> <!-- .nav-items -->
    </nav> <!-- .main-nav .desktop .mobile -->

    <!-- Home page -->
    <section id="home" class="home">
        <div class="heading">
            <h1>#coachellamoment</h1>
            <a href="#info" class="down">
                <img src="img/scroll.png" alt="scroll button">
            </a>

        </div> <!-- .heading -->
        <video autoplay loop>
            <source src="img/video.mp4" type="video/mp4">
        </video>
    </section> <!-- #home .home -->

    <!-- About the contest -->
    <section id="info" class="info">
        <img src="img/people.png" alt="Coachella visistors" class="info-img">
        <div class="bg-block">
            <div class="text-block">
                <h2>Share your best Coachella moment!</h2>
                <p>Find your best moment from last year's Coachella and share it with the world! Use <strong><a href="https://www.instagram.com/explore/tags/coachellafestival/" target="_blank">#coachellamoment</a></strong> to tag your image on Instagram, no later than Friday, June 2nd. The Coachella moment with most likes by the end of the contest wins two free tickets to next year's festival!</p>
                <div class="link">
                    <a href="https://www.instagram.com/" class="insta-link" target="_blank">Start sharing now</a>
                </div>
            </div> <!-- .text-block -->
        </div> <!-- .bg-block -->
    </section> <!-- #info .info -->

    <!-- Top list -->
    <section id="top-list" class="top-list">
        <h2>Top List</h2>
        <div class="overlay">
          <div class="pop-up">
          </div> <!-- .pop-up -->
        </div> <!-- .overlay -->
        <div class="posts">
        </div> <!-- .posts -->
    </section> <!-- #top-list .top-list -->

    <!-- About the festival (remote link to Coachella) -->
    <section id="coachella" class="coachella">
        <div class="img-block">
            <img src="img/coachella2.jpg">
        </div> <!-- .img-block -->
        <div class="text-block animated-text">
            <h2>Coachella festival</h2>
            <p>Ready to make your Coachella experience exceptional? Everything you want to know before you hit the desert can be found in our Coachella Guides. From Passes and Travel to Camping and Cuisine, we’ve got you covered.</p>
            <div class="link">
                <a href="https://www.coachella.com/" target="_blank">Visit Coachella official</a>
                <div class="hover"></div>
            </div>
        </div> <!-- .text-block .animated-text -->
    </section> <!-- #coachella .coachella -->

    <!-- Most recent posts -->
    <section id="most-recent" class="most-recent">
        <h2>Most recent posts</h2>
        <div class="posts">
            <!-- Posts-->
        </div> <!-- .posts -->
    </section> <!-- #most-recent .most-recent -->

    <footer class="footer">
        <div class="palm">
            <!-- Import SVG-image -->
            <?php include 'php/palmtree.php'; ?>
        </div> <!-- .palm -->
        <div class="logo">
            <img src="img/logo.png" alt="logo">
            <p>COACHELLA VALLEY MUSIC AND ARTS FESTIVAL</p>
        </div> <!-- .logo -->
        <div class="social">
            <i class="fa fa-facebook-official"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-youtube-square"></i>
            <i class="fa fa-twitter-square"></i>
        </div> <!-- .social -->
        <a href="#home" class="to-top">&#8743;</a>
    </footer> <!-- .footer -->

    <!-- Script -->
    <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,fetch"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/all.js"></script>
</body>
</html>
