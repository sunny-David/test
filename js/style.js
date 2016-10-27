/**
 * Created by hxsd on 2016/10/25.
 */
    //导航栏hover
$(function(){
    $(".nav").find("a").each(function(index){
        $(this).hover(function(){
            $(".home").removeClass("home")
            $(this).addClass("home")
        })
    });

    //// 跳转按钮
    ////选出有效的a标签（排除外部标签；排除空连接）
    //$('a[href*="#"]:not([href="#"])').on('click',function(e){
    //    e.preventDefault();
    //    e.stopPropagation();
    //
    //    $('html,body').animate({'scrollTop':$(this.hash).offset().top},1000);
    //});

});
