jQuery(function($) {

  $(".lang-wrap-active, .active-language").on("click", "a", function(){
    return false;
  });

  if ($(this).scrollTop() > 50) {
    $("header").addClass('fixed');
  } 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass('fixed');
    } else {
      $("header").removeClass('fixed');
    }
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

	/*Мобильный гамбургер*/
 $(".header-hambugreg").click(function(){
   $(".header-hambugreg").toggleClass('is-active');
   $(".mobile-header").toggleClass('active');
   $(".main-header").toggleClass('active');
   $(".mobile-header-bg ").toggleClass('active');
 });
 $(".main-menu ul li a").click(function(){
   $(".header-hambugreg").removeClass('is-active');
   $(".mobile-header").removeClass('active');
   $(".main-header").removeClass('active');
   $(".mobile-header-bg ").removeClass('active');
 });




    if($(window).width() > 992) {
      $('.page-container ').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 40);
        var amountMovedY = (e.pageY * -1 / 40);
        var startBgcenterX = 0 + amountMovedX;
        var startBgcenterY = 0 + amountMovedY;
        $(".hero-left-box").css('transform', 'translate' + "(" + -startBgcenterX + 'px, ' + -startBgcenterY + 'px' + ")");
        $(".m-8-box-image").css('transform', 'translate' + "(" + startBgcenterX + 'px, ' + startBgcenterY + 'px' + ")");
        $(".m-5-left-box-black").css('transform', 'translate' + "(" + startBgcenterX + 'px, ' + startBgcenterY + 'px' + ")");
      });
    }
  






$(".single-menu a").click(function() {
         $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
         }, {
            duration: 500,
            easing: "swing"
         });
         return false;
      });



  	/*
  	Маска для номера телефона

  	$("#m_8_phone").mask("+38 (099) 999-99-99");
  	*/

/*    
    Contact form 7 - успешная отправка

      $(document).ready(function(){ 
        $('.wpcf7').on( 'wpcf7mailsent ', function( event ) { 
          var inst = $('[data-remodal-id=remodal_thanks]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();      
        });
      });*/

	/*
  	Плавный скрол
$(".hero-next-page").click(function() {
         $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
         }, {
            duration: 500,
            easing: "swing"
         });
         return false;
      });
  	*/

	/*
	Слик слайдер

	$('.s_4_slider_2').slick({
	  arrows: false,                    // Стрелки
	  asNavFor: ".s_4_slider_1",        // Связки 2 слайдеров для thumbnail
	  slidesToShow: 3,                  // Количество слайдов, которые показываются сразу
	  focusOnSelect: true,              // Фокус на елемент при клике
	  autoplay: true,                   // Автоматическое переключение
	  autoplaySpeed: 3000,              // Время на показ слайда до переключения на следующий
	  dots: false,                      // Точки
	  fade: false,                      // Эффект затухания вместо перелистывания
	  infinite: true,                   // Бесконечность слайдов
	  initialSlide: 0,                  // Номер с которого откроется слайдер
	  pauseOnHover: true,               // Пауза при наведении на слайдер
	  pauseOnDotsHover: false,          // Пауза при наведение на точки
	  rows: 1,                          // Количество строк
	  centerMod: true,                  // Центровать слайд
	  centerPadding: '50px',            // Отсупы от центрального слайда
	  draggable: true,                  // перелистывание слайдов, перетаскиванием слайда мышью
	  speed: 300,                       // Скорость анимации перелистывания
	  vertical: false,                  // Переключение на вертикальный тип слайдера
	  cssEase: "easy",                  // Вид анимации, для непрерывного слайдера linear  
	  responsive: [                     
	    {
	      breakpoint: 992,
	        settings: {

	      }
	    },
	    {
	      breakpoint: 600,
	        settings: {

	      }
	    },
	  ]
	});
	*/


	/*
	Валидация - отправка формы ajax

	$("form#idForm").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: "Это поле обязательно для ввода",
            },
            email: {
                required: "Это поле обязательно для ввода",
                email: "Вы ввели некоректный email",
            },
        },
        submitHandler: function () {
            var formData2 =  $('form#idForm').serialize(); // Выбираем нашу форм, посылание на тег form
            $.ajax({
              url: '/wp-admin/admin-ajax.php', 
              type: 'POST',
              data: formData2 + '&action=my_form_action',  // У каждой формы свой action, который пишется после =
              success: function() {
                $("form#idForm input[type=text]").val(""); // Чистим формы после того как клиент отправил данные нам на почту
                var inst = $('[data-remodal-id=remodal_id]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();                                               // remodal открытие
                },
              error: function() {
                alert('Error');
              }
            });
            return false;
        }
   });
   */

});
