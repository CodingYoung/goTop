function goTop (distance,time) {
    var distance_temp = 800
    var time_temp = 500
    $(document).scroll(function() {
            if(distance) {
                distance_temp = distance
            }
            if(time) {
                time_temp = time
            }
            console.log($(document).scrollTop())
            if($(document).scrollTop()>distance_temp) {
                $('.goTop').fadeIn()
            }else {
                $('.goTop').fadeOut() 
            }
        })
        $('.goTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
                },time_temp);
            })
   }