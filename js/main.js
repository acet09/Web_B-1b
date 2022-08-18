'use strict';
// Jquery
$(document).ready(function(){
  // nav
  $("#GNB .sub").hide();
  $("#GNB .main > li").hover(function(){
    $("#GNB .sub").stop().slideDown(200);
  },function(){
    $("#GNB .sub").stop().slideUp(200);
  });

  // slid
  function slidemove(){
    let smv=$(".slide__box > div").width();
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first-child").appendTo(".slide__box");
      $(".slide__box").css({
        left:0
      });
    });
  }
  setInterval(slidemove, 3000);
  
  // tab
  $(".notgall__con > div").hide();
  $(".notgall__con > div:first").show();
  $(".notgall__title a").click(function(){
    let num=$(this).index();
    console.log(num);
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__con > div").hide();
    $(".notgall__con > div").eq(num).show();

  });



  // pop
  $("#pop").hide();
  $("#notice ul li:first-child").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });
});