(function() {
    var video = document.querySelector('.video');
    video.addEventListener('click', function() {
        var modal = this.getAttribute('data-target');
        var vidSource = this.getAttribute('data-video');
        var videoAutoPlay = vidSource + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        console.log(vidSource);

        var iframe = document.querySelectorAll(modal + ' iframe');
        iframe[0].src = videoAutoPlay;
        document.querySelector('.modal-body').style.display = "block";

        var vidClose = document.querySelectorAll(modal + ' button.close');

        //		console.log(vidClose)
        vidClose[0].addEventListener('click', function() {
            var videoFrame = document.querySelectorAll(modal + ' iframe');
            videoFrame[0].src = "";
            document.querySelector('.modal-body').style.display = "none";
        });
    });
})();



(function() {
    // Get modal element
    var modal = document.getElementById('videoModal');

    // Get open modal button
    var modalBtn = document.getElementById('video-play');

    // Get Hire Me modal Button
    //	var hireMeBtn = document.getElementById('hireMe');

    // Get close button
    var closeBtn = document.querySelector('.close');

    // Listen for outside clicked
    window.addEventListener('click', function(evt) {
        if (evt.target == modal) {
            evt.target.children[0].childNodes[1].childNodes[3].src = "";
            modal.style.display = 'none';
            evt.preventDefault();
        }
    });

    // Listen for open click event
    modalBtn.addEventListener('click', function(evt) {
        modal.style.display = 'block';
        evt.preventDefault();
    });

    // Listen for close click event
    closeBtn.addEventListener('click', function(evt) {
        modal.style.display = 'none';
        evt.preventDefault();
    });
})();