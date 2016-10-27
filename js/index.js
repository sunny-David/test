/**
 * Created by hxsd on 2016/10/13.
 */
$(function(){
    //导航栏
    $(window).scroll(function(){
        if($(window).scrollTop()>400){
            //alert(123)
            $(".header").css({"background-color":"#fff","padding-top":"0px"});
            $(".header_line").addClass("line")
        }else{
            $(".header").css({"background-color":"","padding-top":"20px"});
            $(".header_line").removeClass("line")
        };
    });
    //button  hover
    $(".found_download").find("a").each(function(index){
        $(this).hover(function(){
            $(this).css({"background":"#617fde","color":"#fff"}).siblings().css({"background":"#fff","color":"#617fde"})
        });
    });
    var open=true;
    $(".reorder").click(function(){
        if(open){
            $(".nav").css({"display":"block","position":"absolute","left":"0","top":"76px","width":"100%"});
            $(".nav li").css({"float":"none","width":"100%","background":"#fff","border-bottom":"1px solid #eee"});
            $(".nav li a").css({"color":"#617fde","background":"none"});
            open=false;
        }else{
            $(".nav").css("display","none");
            open=true
        };
    });


    //主题切换
    var theme_color=["#272b35","#fd7897","#f9bf13","#b8b9bc","#617fde","#06ce90"];
    var n=0;
    setInterval(slider,2000)

    $(".slide_nav ul").find("li").each(function(index){
        $(this).click(function(){
            n=index;
            $(".section_theme").css("background",theme_color[index]);
            $(".scale").removeClass("scale");
            $(this).addClass("scale");
            $(".theme_list ul").find("li").eq(index).show().siblings().hide();
        });
    });
    function slider(){
        $(".section_theme").css("background",theme_color[n]);
        $(".scale").removeClass("scale");
        $(".slide_nav ul").find("li").eq(n).addClass("scale");
        $(".theme_list ul").find("li").eq(n).show().siblings().hide();
        n++;
        if(n>=theme_color.length)
        n=0;
    };
    //more_function
    var url="data/more_function.json";
    $.getJSON(url,function(data){
        var more_content="";

        for(var i=0;i<data.length;i++){
            var I_Class=data[i].class;
            var title=data[i].title;
            var info=data[i].info;
            more_content+="<li>"+
                        "<i class='"+I_Class+"'></i>"+
                        "<h5>"+title+"</h5>"+
                        "<p>"+info+"</p>"+
                    "</li>"
        };
        $(".more_function").html(more_content);
    });
    //footer
    $(".estimate_app").find("i").each(function(index){
        $(this).hover(
            function(){
                $(".color").removeClass("color");
                $(this).addClass("color");
                $(".show").removeClass("show");
                $(".estimate_title").find("a").eq(index).addClass("show");
            }
        );
    });
});













