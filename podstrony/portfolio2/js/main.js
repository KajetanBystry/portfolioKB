$(document).ready (function(){
    changeNavbarColor();
});

$(window).scroll (function(){
    changeNavbarColor();
});

//aby menu zmieniało kolor po scrollu w dół

function changeNavbarColor(){
    var navHeight = $('#navbar').height();
    var actualPos = $(document).scrollTop();
    
    console.log(navHeight);
    console.log(actualPos);
    
    if(actualPos > navHeight) {
        $('#navbar').addClass('bgcolor');
    }else{
        $('#navbar').removeClass('bgcolor');
    }
    
}

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
});

