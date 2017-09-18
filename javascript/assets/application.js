var random_number,element;
random_number=Math.floor(Math.random()*6+1);
element=document.getElementsByTagName("body")[0];
element.style.background="url(images/background/"+random_number.toString()+".jpg)";
element.style.backgroundSize="cover";
element.style.width="100%";
element.style.height="100%";
element.style.backgroundAttachment="fixed";
element.style.overflow="hidden";
$(function() {

  /*-----------------------------------------------------------------------------------*/
  /*  Anchor Link
  /*-----------------------------------------------------------------------------------*/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
        return false;
      }
    }
  });

  /*-----------------------------------------------------------------------------------*/
  /*  Tooltips
  /*-----------------------------------------------------------------------------------*/
  $('.tooltip-side-nav').tooltip();
  
});
