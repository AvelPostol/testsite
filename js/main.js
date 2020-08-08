$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w) {
   var headerMenu=$('.header-menu');
   if(w.matches){
      if(!$('.header-bottom-menu__link').hasClass('done')){
         $('.header-bottom-menu__link').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.header-bottom-menu__link'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-bottom-menu-list'));
            }
         
      });
   }
}
function adaptive_function() {
   var w=window.matchMedia('(max-width: 992px)');
   adaptive_header(w);
}
   adaptive_function();
   $('.header-menu__icon').click(function(event) {
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      /*if($(this).hasClass('active')){
         /*$('body').data('scroll',$(window).scrollTop());*/
      /*}*/
         $('body').toggleClass('lock');
      /*if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('bode').data('scroll')));
      }*/
   });
   $('.header-bottom-menu__link').click(function(event){
      $('.header-menu').removeClass('active');
   });
      /*var headerLang=$('.bussines');
   if(w.matches){
      if(!headerLang.hasClass('done')){
         headerLang.addClass('done').appendTo(headerMenu);
   
      }
   }else{
      if(headerLang.hasClass('done')){
         headerLang.removeClass('done').prependTo($('.header-top'));
      }
   }*/
   $(window).resize(function(event){
      adaptive_btn();
   });
   function adaptive_b(w) {
      if(w.matches){
         if($('.send').hasClass('contacts-menu__link')){
            $('.send').removeClass('contacts-menu__link');
            $('.send').addClass('btn');
         }
      }
      else{
         $('.send').removeClass('btn');
            $('.send').addClass('contacts-menu__link');
      }
   }
   function adaptive_btn() {
      var w=window.matchMedia('(max-width: 480px)');
      adaptive_b(w);
   }

   $('.web').click(function(event) {
      if(!($('.apps-metka').hasClass('hidden'))){
         $('.apps-metka').toggleClass('hidden');
      }
      if(!($('.other-metka').hasClass('hidden'))){
         $('.other-metka').toggleClass('hidden');
      }
      if($('.web-metka').hasClass('hidden')){
         $('.web-metka').removeClass('hidden');
      }
      if(!($('.web').hasClass('pointer'))){
         $('.web').toggleClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }
   });
   $('.apps').click(function(event) {
      if(!($('.web-metka').hasClass('hidden'))){
         $('.web-metka').toggleClass('hidden');
      }
      if(!($('.other-metka').hasClass('hidden'))){
         $('.other-metka').toggleClass('hidden');
      }
      if($('.apps-metka').hasClass('hidden')){
         $('.apps-metka').removeClass('hidden');
      }
      if(!($('.apps').hasClass('pointer'))){
         $('.apps').toggleClass('pointer');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }

   });
   $('.other').click(function(event) {
      if(!($('.web-metka').hasClass('hidden'))){
         $('.web-metka').toggleClass('hidden');
      }
      if(($('.other-metka').hasClass('hidden'))){
         $('.other-metka').removeClass('hidden');
      }
      if(!($('.apps-metka').hasClass('hidden'))){
         $('.apps-metka').toggleClass('hidden');
      }
      if(!($('.other').hasClass('pointer'))){
         $('.other').toggleClass('pointer');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }

   });
   $('.all').click(function(event) {
      if($('.apps-metka').hasClass('hidden')){
         $('.apps-metka').removeClass('hidden');
      }
      if($('.web-metka').hasClass('hidden')){
         $('.web-metka').removeClass('hidden');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if(!($('.all').hasClass('pointer'))){
         $('.all').toggleClass('pointer');
      }
      if($('.other-metka').hasClass('hidden')){
         $('.other-metka').removeClass('hidden');
      }
   });

   $(window).scroll(function(event){
      var s=0-$(this).scrollTop()/2;
      $('.mainblock__image').css('transform', 'translate3d(0, '+s+'px, 0)');
   });

   function ibg(){
      $.each($('.ibg'), function(index, val){
         if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
         }
      });
   }
   ibg();

