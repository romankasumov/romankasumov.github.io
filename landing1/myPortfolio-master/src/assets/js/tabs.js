let allBlock = document.querySelectorAll(".content-accordion");
$(allBlock).hide();

function test (event) {
    "use strict"
    let myParent = event.target.parentNode.nextElementSibling;
    $(myParent).slideToggle(1000);
}



/* slick-slider */

$(document).ready(function(){
    $('.comments-slider').slick({
        vertical: true,
        slidesToShow: 2,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: '<button id="prev" type="button" class="slick-btn-parent slick-btn-next"> </button>',
        nextArrow: '<button id="next" type="button" class="slick-btn-parent slick-btn-prev"> </button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
              }
            }]
    })
})
