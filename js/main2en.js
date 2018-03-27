$(document).ready (function(){
   $('#navbar').find('a').click(function(){
       if(this.hash !== ''){
           event.preventDefault();
           var hash = this.hash;
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){
               window.location.hash = hash;
           })
       }
   })
    $('#welcome').css('margin-top', '60px');
    $('#navbar').css('z-index', '1');
    $('#first').css('display', 'none');
    $("body").css("overflow", "auto");
    active();
});

//$(function active(){
//    // this will get the full URL at the address bar
//    var url = window.location.href; 
//
//    // passes on every "a" tag 
//    $(".navbar-nav a").each(function() {
//            // checks if its the same on the address bar
//        if(url.includes('aboutme')) { 
//            $(this).closest("li").addClass("activated");
//        }
//    });
//});
$('.navbar-nav a').click(function(){
    if($('.navbar-nav a').hasClass("activated")){
        $('.navbar-nav a').removeClass('activated')
    }
    $(this).addClass('activated');
});

$('#niepatrz').click(function(){
    $('#hidden').animate({
    height:'350px'}, 3000)
   
});

$('#ukryty').click(function(){
    $('#hidden').animate({
    height:'0px'}, 3000)
});

$('#navbtn').click(function(){
    $('.nav-item').css('background-color', '#FFF');
})

$('.imgic4').hover(function(){
    $(".jquery").attr("src", function(index, attr){
        return attr.replace("jquery.png", "jquery-color.png");
    });
}, function(){
    $('.jquery').attr("src", function(index, attr){
        return attr.replace("jquery-color.png", "jquery.png");
    });
});

$('.imgic5').hover(function(){
    $(".bootstrap").attr("src", function(index, attr){
        return attr.replace("bootsrap.png", "bootsrap-color.png");
    });
}, function(){
    $('.bootstrap').attr("src", function(index, attr){
        return attr.replace("bootsrap-color.png", "bootsrap.png");
    });
});

$('#myform').submit(function() {
    if ($.trim($(".name").val()) === "" || $.trim($(".mail").val()) === "" || $.trim($(".mail").val()) === "") {
        $('.read').text("Please fill all provided spaces.");
        $('.read').css('color', 'red');
        return false;
    }else{
        $('.read').text("Thank you for your cooperation ;).");
        $('.read').css('color', '#000');
    }
});


