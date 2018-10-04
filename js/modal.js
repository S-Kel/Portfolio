// alert("H.....")
(function() {
    // Get modal element
    var modal = document.getElementById('simpleModal');

    // Get open modal button
    var modalBtn = document.getElementById('modalBtn');

    // Get Hire Me modal Button
    var hireMeBtn = document.getElementById('hireMe');

    // Get close button
    var closeBtn = document.querySelector('.closeBtn');

    // Listen for outside clicked
    window.addEventListener('click', function(evt) {
        if (evt.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Listen for open click event
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Listen for open click event
    hireMeBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });


    // Listen for close click event
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
})();