(function ($) {
    var el = $("iframe");
    var str = el.attr('scrolling') ? false : true;
    if(str){
      el.attr("scrolling","no");
    }
  
  })(jQuery)