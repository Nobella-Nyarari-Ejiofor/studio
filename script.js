function whatToDo2(){
  $('.p2').hide();
      if($('.img-2').on('click',function(){
          $('.p2').show();
          $('.img-2').hide();
      })){}
      if($('.p2').on('click',function(){
          $('.img-2').show();
          $('.p2').hide();
      })){}
}
whatToDo2();





function whatToDo1(){
  // Hiding the paragraph
  $('.p1').hide();
   if($('.img-1').on('click',function(){
      $('.img-1').hide();
      $('.p1').show();
      
   })){};
   if($('.p1').on('click',function(){
     $('.p1').hide();
     $('.img-1').show();
     
   })){};
};
whatToDo1()
function whatToDo3(){
  // Hiding the paragraph
  $('.p3').hide();
   if($('.img-3').on('click',function(){
      $('.p3').show();
      $('.img-3').hide();
   })){};
   if($('.p3').on('click',function(){
     $('.img-3').show();
     $('.p3').hide();
   })){};
};
whatToDo3()

$(document).ready(function(){
   $(".imageeffect").mouseenter(function(){
       $(".titleimage").show();
       $(this).css("opacity" , "0.3");

   });
   $(".imageeffect").mouseleave(function(){
      $(this).css("opacity", "1.0");
      $(".titleimage").hide()
   });
})