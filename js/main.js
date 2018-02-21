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
    $("body").css("overflow", "hidden");
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

$('#langbtn').click(function(){
    if($('#langbtn').hasClass('expanded')){
        $('#eng').fadeOut();
        $('#langbtn').removeClass('expanded');
        $('#arrow').removeClass('fa-caret-up').addClass('fa-caret-down');
    }else{
        $('#eng').fadeIn();
    $('#arrow').removeClass('fa-caret-down').addClass('fa-caret-up');
    $('#langbtn').addClass('expanded');
        }
})
//$('#enter').click(function(){
//    $('#welcome').css('margin-top', '60px');
//    $('#navbar').css('z-index', '1');
//    $('#first').css('display', 'none');
//    $("body").css("overflow", "auto");
//})





