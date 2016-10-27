$(function(){
    var infoLeft=$(".info_left");
    var left_H=-infoLeft.height()/2;
    infoLeft.css("margin-top",left_H);

    //模态层，升级框
    var modal=$(".modal");
    var pop_window=$(".pop_window");
    var upgrade=$(".upgrade");
    var pop_t=( $(window).height() - pop_window.height() )/ 2+"px";
    var pop_l=( $(window).width() - pop_window.width() )/2+"px";

    modal.removeClass("block").addClass("hide");
    pop_window.css(
        {"top":pop_t,"left":pop_l,"display":"none"}
    );
    var close=$(".closeBtn");



    upgrade.click(function(event){
        event.preventDefault();
        event.stopPropagation();
        $ (window).scroll (function ()
        {
            $ (this).scrollTop (0)
        });
        $ (window).unbind ('scroll');

        modal.removeClass("hide").addClass("show");
        pop_window.removeClass("hide").addClass("show");
    });

    close.click(function(event){
        event.preventDefault();
        $("html").css({"height":"100%","overflow":"visible"});
        $("body").css({"height":"100%","overflow":"visible"});

        pop_window.removeClass("show").addClass("hide");
        modal.removeClass("show").addClass("hide");
    });

    var on_of=true;
    $(".menu_frame").click(function(){
        if(on_of) {
            $(".choose_menu").removeClass("hide").addClass("show");
            on_of = false;
        }else{
            $(".choose_menu").removeClass("show").addClass("hide");
            on_of = true;
        };
    });
    $(".date_frame").click(function(){
        if(on_of) {
            $(".choose_date").removeClass("hide").addClass("show");
            on_of = false;
        }else{
            $(".choose_date").removeClass("show").addClass("hide");
            on_of = true;
        };
    });

    $(".choose_menu").find("li").each(function(index){
        $(this).click(function(){
            $(".menu_frame").text($(this).text()).siblings().removeClass("show").addClass("hide");

            if($(".date_frame").text()=="月")
                total(13.9);
            else
                total(139);

            on_of = true;
        });
    });
    $(".choose_date").find("li").each(function(index){
        $(this).click(function(){
            $(".date_frame").text($(this).text()).siblings().removeClass("show").addClass("hide");

            if($(".date_frame").text()=="月")
                total(13.9);
            else
                total(139);

            on_of = true;
        });
    });

    function total(price){
        var original=parseFloat($(".menu_frame").text())*price;
        var discount=parseFloat(original*(9.9/13.9)).toFixed(2);
        console.log(original);

        $("#original_price").text("原价：￥"+original);
        $("#discount_price").text("￥"+discount);

    };


    //跳转
    $(".privilege").click(function(even){
        even.preventDefault();
        $('html,body').animate({'scrollTop':$("#privilegeList").offset().top},1000);
    });
});