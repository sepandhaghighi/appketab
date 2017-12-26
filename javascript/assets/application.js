var random_number,element;
random_number=Math.floor(Math.random()*5+1);
element=document.getElementsByTagName("body")[0];
element.style.background="url(../images/background/"+random_number.toString()+".jpg)";
element.style.backgroundSize="cover";
element.style.width="100%";
element.style.height="100%";
element.style.margin="0";
element.style.overflow="hidden";
element.style.backgroundAttachment="fixed";
element.style.backgroundRepeat="no-repeat";


function resizeBackground() {
    $("body").height($(window).height());
}

$(window).resize(resizeBackground);
resizeBackground();


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

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

$("header").scroll(function(){
    $("#email")[0].style.opacity=0.2;
     $("#login-footer")[0].style.opacity=0.2;
});
$("header").scrollEnd(function(){
    $("#email")[0].style.opacity=1;
    $("#login-footer")[0].style.opacity=0.9;
}, 370);

