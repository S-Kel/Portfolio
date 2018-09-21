// alert("H.....")

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