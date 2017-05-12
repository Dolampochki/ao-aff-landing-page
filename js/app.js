
$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    css3: true,
    menu: '#menu',
    scrollingSpeed: 1000,
    autoScrolling: false,
    fitToSection: false,

    'afterLoad': function(anchorLink, index){
      if(index == 1){
        $(".promo-bg").addClass("animated fadeIn");
        $("#promo h2").addClass("animated fadeIn");
        $("#promo .promo-img img").addClass("animated bounceInLeft");
      }
      if(index == 2){
        $("#main .main-block").addClass("animated flipInY");
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('#main .num-1 span').animateNumber({
          number: 18000,
          numberStep: comma_separator_number_step
        },2000);
      }
      if(index == 3){
        $('#offers .offers-img img').removeClass("hide").addClass("animated fadeIn");
        $('#offers ul').removeClass("hide").addClass("animated bounceInRight");
        $('#offers .num-2 strong').animateNumber({ number: 500 },2000);
        $('#offers .num-3 strong').animateNumber({ number: 50 },2000);
      }
      if(index == 4){
          $("#icons ul li").addClass("animated flipInX");
      }
      if(index == 5){
          $(".safe img").removeClass("hide").addClass("animated bounceInDown");
      }
      if(index == 6){
          $(".academy img").removeClass("hide").addClass("animated fadeIn");
      }
      if(index == 7){
          $("#footer-logos img").removeClass("hide").addClass("animated zoomIn");
      }
    },

    'onLeave': function(index, nextIndex, direction){
      if(index == 2 && direction == 'down'){

      }
      if(index == 2){

      }
      else if(index == 2 && direction == 'down'){

      }
    }
  });





});
