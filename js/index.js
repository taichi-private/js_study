$(function(){
    $(".btn1").click(function(){
      if ($(this).hasClass("btn1")){
            $(this).removeClass("btn1");
            $(this).addClass("btn1_style");
      }else{
            $(this).removeClass("btn1_style");
            $(this).addClass("btn1");     
      };
    });
    $(".btn2").click(function(){
      $(".box").hide();
    });
    $(".btn3").click(function(){
      $(this).fadeOut();
    });
    $(".btn4").toggle(function(){
          $(this).css("background-color","green")
      },function(){
          $(this).css("background-color","yellow")
      },function(){
          $(this).css("background-color","red")
      },function(){
          $(this).css("background-color","orange")
    });
});

$(function(){
    setTimeout(function(){
      $(document).ready(function() {
          $('.all_box').fadeOut(1200);
      });
    },800);
});
