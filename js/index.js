var temp="web sites";

 $(document).ready(function(){
     sticky();
     (function(){
        $(".carrousel").eq(1).css("display","none")
        $(".carrousel").eq(1).css("transform",`translateX(${window.screen.width}px)`);

     })();
     
     demo();
    $(".loaderoverlay").css("display","none");
    $("body").css("overflow","auto");
    window.onscroll = function(){
        teamsLoading();
        sticky();
    }; 
    $("#whoAnimation").html("software");
    let timer1=setInterval(function(){autoType(timer1)},300)

    $(".about-left-buttons button").eq(0).click(function(){
        $(".about-left-buttons button").eq(0).css("border-bottom","1px solid gray");
        $(".about-left-buttons button").eq(1).css("border-bottom","transparent");
        $(".about-left-buttons button").eq(2).css("border-bottom","transparent");
        $(".about-left-prag1").eq(0).html("Expedita minima fugiat ea maiores itaque natus animi officia iure deleniti unde, facilis velit optio! Culpa quis neque tempora deleniti assumenda aperiam.")
        $(".about-left-prag1").eq(1).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt neque porro quia quidem saepe assumenda asperiores quo ratione ipsam nulla quisquam.")
    })
    $(".about-left-buttons button").eq(1).click(function(){
        $(".about-left-buttons button").eq(1).css("border-bottom","1px solid gray");
        $(".about-left-buttons button").eq(2).css("border-bottom","transparent");
        $(".about-left-buttons button").eq(0).css("border-bottom","transparent");
        $(".about-left-prag1").eq(0).html("Itaque omnis tenetur placeat facere mollitia molestias, doloribus pariatur sapiente qui hic laboriosam aut accusamus repellat ab perspiciatis commodi voluptates.")
        $(".about-left-prag1").eq(1).html("Amet reiciendis natus dolorem nisi iusto vel laudantium quisquam tenetur, saepe rem ducimus, harum possimus delectus ex neque numquam officia! Dolore, ut?")
    })
    $(".about-left-buttons button").eq(2).click(function(){
        $(".about-left-buttons button").eq(2).css("border-bottom","1px solid gray");
        $(".about-left-buttons button").eq(0).css("border-bottom","transparent");
        $(".about-left-buttons button").eq(1).css("border-bottom","transparent");
        $(".about-left-prag1").eq(0).html("Eligendi dolorem repellat, officiis nobis. Itaque repudiandae, eligendi totam nihil aliquid, vitae quos cum minus nulla autem, in? Temporibus, accusantium.")
        $(".about-left-prag1").eq(1).html("Iusto et omnis vel, ex illo rem qui provident sed deserunt deleniti voluptatem, labore. Quia modi dignissimos, dicta sapiente aspernatur, consectetur veritatis.")
    })    
    
    function sticky(){
        if($("#navbar").offset().top>20)
        {
            $("#navbar").removeClass("navbar-dark");
            $("#navbar").addClass("sticky bg-nav navbar-light");
            $(".navbar-brand").addClass("nav-text1");
            for(let i=0;i<$(".nav-link").length;i++){
                $(".nav-link").eq(i).addClass("nav-text")
            }
            for(let j=0;j<$(".nav-Social-links").length;j++){
                $(".nav-Social-links").eq(j).addClass("nav-text")
            }
        } 
        else{
            $("#navbar").removeClass("sticky bg-nav navbar-light");
            $("#navbar").addClass("navbar-dark");
            $(".navbar-brand").removeClass("nav-text1");
            for(let i=0;i<$(".nav-link").length;i++){
                $(".nav-link").eq(i).removeClass("nav-text")
            }
            for(let j=0;j<$(".nav-Social-links").length;j++){
                $(".nav-Social-links").eq(j).removeClass("nav-text")
            }
    
        }
    }
    
    let autoType=function(timer1){
    
        if($("#whoAnimation").html().length>0){
            $("#whoAnimation").html($("#whoAnimation").html().slice(0,-1));
    
        }
        else{
            clearInterval(timer1);
            let index=0;
            setTimeout(function(){autoType2(index)},300)
        }
    
    }       
    let autoType2=function(index){
        if(Number($("#whoAnimation").html().length)<Number(temp.length)){
            $("#whoAnimation").html(temp.slice(0,index))
            index++;
            setTimeout(function(){autoType2(index)},300)
        }
        else{
            let timer1=setInterval(function(){autoType(timer1)},300)
    
        }
    }
    let teamsLoading=function(){
        if(Number($(".teams").offset().top)<=Number($(window).scrollTop())+Number(window.screen.height)/2){
            $(".team").slideDown(500)
        }
    }
    
     function demo(){
        for(let i=0;i<($(".originalText").html().trim(" ")).length;i++){
       var litter= ($(".originalText").html().trim(" ").split(""))[i];
       $(".animationTest").append(`<span>${litter}</span>`)
    }
    $(".originalText").remove();
    let char=0;
    let timer=setInterval(animat,100);
    let timerReverse;
    ($(".animationTest span").eq(0)).addClass("fadein");
    function animat(){
        if(char<$(".animationTest span").length)
        {
            char++;
            ($(".animationTest span").eq(char)).addClass("fadein");
            
        
        }
        else{
            clearInterval(timer)
            timerReverse=setInterval(animatReverse,100)
        }
    }
    function animatReverse(){
        if(char>-1)
        {
            char--;
            ($(".animationTest span").eq(char)).removeClass("fadein");
        
        
        }
        else{
            clearInterval(timerReverse)
            timer=setInterval(animat,100)
        }
    }
    }



    let workButtons=$(".works-options button");
    for(let i=0;i<workButtons.length;i++){
        workButtons[i].addEventListener("click",function(){
            if(i==1)
            {
                
            }
        })
    }
    
 })



