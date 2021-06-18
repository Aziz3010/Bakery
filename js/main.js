// nav change color when scroll
let captionOffset = $(".caption").offset().top;

$(window).scroll(function(){
    
    // nav change color
    let theScrollTop = $(window).scrollTop();

    if(theScrollTop > captionOffset - 100 ){
        $(".navs").css({"backgroundColor":"#f5f5f5", "padding":".5rem"})
        $(".logo img").attr("src","./img/bakery-color.png")
        $(".up").fadeIn(500)
        $(".up").css("display","flex")
    }
    else
    {
        $(".navs").css({"backgroundColor":"transparent", "padding":"1.5rem"})
        $(".logo img").attr("src","./img/bakery-light-1.png")
        $(".up").fadeOut(500)
        $(".up").css("display","none")
    }

});


// blog ui

$("#ourBakingL").mousemove(function(){
    $("#ourBaking-ul").css("display","block")
});

$("#ourBakingL").mouseleave(function(){
    $("#ourBaking-ul").css("display","none")
});


// click on up

$(".up").click(function(){
    $("html,body").animate({scrollTop:0},1500)
});

// smooth scroll

$(".ancur a").click(function(e){
    let theHref = $(e.target).attr("href")
    let sectionOffset = $(theHref).offset().top
    
    $("html,body").animate({scrollTop:sectionOffset},1500)

});

// sitting-icon & cart-icon

$(".sitting-icon , .cart-icon").click(function(){
    console.log("A")
})




