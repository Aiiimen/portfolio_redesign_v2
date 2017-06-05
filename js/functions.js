$(document).ready(function(){
  smoothScrool(1000);
  homepage_landing_elements();

});


//smooth scrolling method
function smoothScrool (duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration)
    }
  });
}


function homepage_landing_elements (){
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    // console.log($('.hero_container').offset().top);
    console.log(wScroll);

    // switch (wScroll) {
    //   case (wScroll > $('.hero_container').offset().top):
    //     console.log("Hello");
    //     $('.social_media_container').addclass('is_showing');
    //
    //
    //     break;
    //   default:
    //     console.log("hello from default");

    //animation from left to right for social media
    // if(wScroll > $('.hero_container').offset().top){
    //
    //   $('.social_media_container').addClass('slide_right');
    // }

    //animation from bottom to top for work brief
    if(wScroll > $('.hero_container').offset().top + 100){
      $('.work_brief').addClass('slide_bottom_top');
    }
    //ideas for animation
    //make every element starting from work brief to have an ease-in-out 0.8
    //second slide from bottom to top (barely noticable animation)
    //reasons: because the main page is such a long page, having a suttle
    //animation to every element shows the user there's more content to scroll
    //through and encourages them to keep going. (find medium article about this)

    //for project descriptions (left and right) add animation from left to right
    //for left description and right_left animation for right description 

  });

}
