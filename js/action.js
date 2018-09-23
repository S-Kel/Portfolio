// alert("H.....")
(function() {
    // Get modal element
    var modal = document.getElementById('simpleModal');

    // Get open modal button
    var modalBtn = document.getElementById('modalBtn');

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


    // Listen for close click event
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
})();

(function() {
    var trigger = document.querySelector('.accordion-toggle');
    var accordion = document.querySelector('.accordion');

    trigger.addEventListener('click', function() {
        accordion.classList.toggle('open');
        console.log(accordion);
    });

    var trigger2 = document.querySelector('.accordion-toggle2');
    var accordion2 = document.querySelector('.accordion2');

    trigger2.addEventListener('click', function() {
        accordion2.classList.toggle('open');
        console.log(accordion);
    });

    var trigger3 = document.querySelector('.accordion-toggle3');
    var accordion3 = document.querySelector('.accordion3');

    trigger3.addEventListener('click', function() {
        accordion3.classList.toggle('open');
        console.log(accordion);
    });
})();


// document.querySelectorAll('.card-header').forEach(function(elements) {
//     elements.addEventListener('click', function() {
//         document.querySelectorAll('.card-body')[0].classList.toggle('show');
//     });
// });

// const uniTrigger = document.querySelector('.uni-header');
// var uniAccordion = document.querySelector('.card-body');

// uniTrigger.addEventListener('click', function() {
//     uniAccordion.classList.toggle('open');
//     console.log(uniAccordion);
// });