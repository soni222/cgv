//gnb
$(document).ready(function () {
    $('.deth >li').on({
        mouseover: function () {
            var num = $(this).index()
            $(this).each(function () {
                if (num == $(this).index())
                    $(this).children('.deth_2').css('display', 'block');
                $('>a', this).css('border-bottom', '4px solid #c70000')

            })

        },
        mouseout: function () {
            var num = $(this).index()
            $(this).each(function () {
                if (num == $(this).index())
                    $(this).children('.deth_2').css('display', 'none');
                $('>a', this).css('border-bottom', 'none')
            })

        }
    })
//toggle
$('.m_btn').on('click',function(e){
    e.preventDefault();
    $('.m_nav_wrap').toggleClass('on');
})


//visual
 var num=1;
 var st;
 $('.visual_img li:gt(0)').hide();
$('.visual_next').on('click',function(e){
    e.preventDefault();
    num++;
    if(num>3){
        num=1
    }
    $('.visual_img li:visible').hide();
    $('.visual_img li:eq('+(num-1)+')').show();

   
})
$('.visual_prev').on('click',function(e){
    e.preventDefault();
    num--;
    if(num<1){
        num=3
    }
    $('.visual_img li:visible').hide();
    $('.visual_img li:eq('+(num-1)+')').show();

    
})

 st=setInterval(set1,2000)

 function set1(){
     $('.visual_next').trigger('click')
 }



//event
var width=$(window).width(375);
$('.event_slide li:gt(0)').hide();
$('.event_btn a').on('click',function(e){
  e.preventDefault();
  var btnNum=$(this).parent().index();
  var currentNum=$('.event_btn a.on').parent().index();
  if(btnNum!=currentNum){
      $('.event_btn a.on').removeClass('on')
      $('.event_btn li:eq('+btnNum+') a').addClass('on')
      $('.event_slide li:eq('+btnNum+')').show();
      $('.event_slide li:eq('+btnNum+')').css('left','734px');

      $('.event_slide li.on').animate({
        'left':'-734px'
   },2000,function(){
       $(this).removeClass('on');
       $(this).hide()
   })

   $('.event_slide li:eq('+btnNum+')').animate({
       'left':'0px'
      },2000,function(){
          $(this).addClass('on');
        
      })

  }

})
var sid=setInterval(eventset,3000)
function eventset(){
    $('.event_next').trigger('click')
}

$('.event_prev').on('click',function(e){
    e.preventDefault();
    var currentNum=$('.event_btn a.on').parent().index();
    var btnNum=currentNum-1;
    if(btnNum<0){
        btnNum=$('.event_btn a').length-1;
    }
    $('.event_btn a.on').removeClass('on')
    $('.event_btn li:eq('+btnNum+') a').addClass('on')
    $('.event_slide li:eq('+btnNum+')').show();
    $('.event_slide li:eq('+btnNum+')').css('left','734px');
    
    $('.event_slide li.on').animate({
        'left':'-734px'
   },2000,function(){
       $(this).removeClass('on');
       $(this).hide()
   })

   $('.event_slide li:eq('+btnNum+')').animate({
       'left':'0px'
      },2000,function(){
          $(this).addClass('on');
        
      })


})
$('.event_next').on('click',function(e){
    e.preventDefault();
    var currentNum=$('.event_btn a.on').parent().index();
    var btnNum=currentNum+1; 
    if(btnNum>$('.event_btn a').length-1){ 
        btnNum=0;
    }
    $('.event_btn a.on').removeClass('on')
    $('.event_btn li:eq('+btnNum+') a').addClass('on')
    $('.event_slide li:eq('+btnNum+')').show();
    $('.event_slide li:eq('+btnNum+')').css('left','734px');
    
    $('.event_slide li.on').animate({
        'left':'-734px'
   },2000,function(){
       $(this).removeClass('on');
       $(this).hide()
   })

   $('.event_slide li:eq('+btnNum+')').animate({
       'left':'0px'
      },2000,function(){
          $(this).addClass('on');
        
      })
})
 
  


//arthouse

    $('.art_list li').each(function (index) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(".art_list li.up").removeClass('up')
            $(this).addClass('up')

            var currentNum = index
            $('.art_main').removeClass('on')
            $('.art_main:eq(' + currentNum + ')').addClass('on')

        })
    })


//notice
 var st;
function set() {
        $('.notice_list').animate({
            top: '-80px'
        }, 2000, function () {
            $('.notice_list').append($('.notice:first'));
            $('.notice_list').css('top', '0px')
        })
    }
    setInterval(set, 2000)



})

