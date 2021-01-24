
$(document).ready(function(){



    $('.nav-link').click(function(){

        var se_filter=$(this).attr('title');
         
        $('.section').addClass('hidden');
       $('.main').contents().filter('.'+ se_filter).removeClass('hidden');
      
      });




    $(' .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
     
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        });




        $('.portfolio-btn-item').click(function(){
            $(this).addClass('active_btn').siblings().removeClass('active_btn');
            
            var img_filter=$(this).attr('id');
      
            if(img_filter==='all'){
       
               $('.portfolio-img .portfolio-item ').fadeIn(700);
            }
            else{
               $('.portfolio-img .portfolio-item').fadeOut(700);
               $('.portfolio-img ').contents().filter('.' + img_filter).fadeIn(700);
            }
       
            
        });



        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Mouaad designer</small>';
                }
            }
        });



 /*style switcher  */
 $('.style-switch .icon').click(function(){
    $('.style-switch').toggleClass('style-switch-show');
  });
 



});