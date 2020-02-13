const my_func = (function (){
    this.main_display = document.querySelector(".main-display");
    let screen_height = $(window).height(); 
    console.log(screen_height);
    this.main_display.style.height = `${screen_height}px`;
})

my_func();


/* */
const hide_head = (function(){
  window.onscroll = function() {
    if (window.pageYOffset > 0) {
      $( ".slide-header" ).fadeOut( 200, 'linear');
      $()
    } else {
      $( ".slide-header" ).fadeIn();
    }
  };
})

hide_head();
/*top slider */

$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button class="top-custom-btn slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button class="top-custom-btn slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>'
    });
  });

/*bottom slider*/ 

$(document).ready(function(){
    $('.bottom-slider').slick({
        prevArrow: '<button class="custom-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="custom-btn slick-next"><i class="fas fa-arrow-right"></i></button>'
    });
  });


/*   $(document).ready(function(){
    let arr = document.querySelectorAll(".slick-slide")
    setTimeout(() => {
      arr.forEach(el => {
        el.style.height = $(window).height();
      });
      console.log(1)
    }, 4000);
    
    }
  ); */

  /* responsive-menu */
  $(document).ready(function(){
    $('.open-responsive-menu').click(function(){
      $('.responsive-menu').fadeIn()
    });
    $('.close').click(function(){
      $('.responsive-menu').fadeOut()
    })
  })