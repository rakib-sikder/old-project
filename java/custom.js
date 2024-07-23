

$(function(){

  $(window).scroll(function(){
    var scrolling = $(window).scrollTop()
    if(scrolling > 150){
      $(".back_to_top i").fadeIn()
    }
    else{
      $(".back_to_top i").fadeOut()
    }
    if(scrolling > 50){
      $("nav").addClass("bg")
    }
    else{
      $("nav").removeClass("bg")
    }
  })

  $(".back_to_top i").click(function(){
    $('html,body').animate({
      scrollTop:0
    })
  })
})

$(function(){
    
  $('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $('.scrn_img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  
})
$(function(){
  $('.feedbc_inner_img').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: false,
    fade: true,
    asNavFor: '.feedbc_inner_txt'
  });
  $('.feedbc_inner_img').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    asNavFor: '.feedbc_inner_txt',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
})
$(function(){
  var mixer = mixitup('.feture_inner');
})
new VenoBox({
  selector: '.my-video-links',
});
