
//$('body').scroll(function(){
//var clientHeight = $( window ).height();
//$('body').css('height', clientHeight);
//});

//function resizeBackground() {
//    $("body").height($(window).height());
//}

//$(window).resize(resizeBackground);
//resizeBackground();


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

