//var coto = 
document.getElementById("click").addEventListener("click", function(event){
    event.preventDefault(this);
    hide();
});

function hide(){
    var hidden = document.getElementById('hidden');
    var a = document.querySelector('#click');
    if(a.innerHTML == 'What is it?'){
    hidden.style.height ='380px';
    document.querySelector('#click').innerHTML = 'Hide';
    }else{
    hidden.style.height ='0px';
    document.querySelector('#click').innerHTML = 'What is it?';
    }
}


var listElm = document.querySelector('#powiesc');
//var fullPage = document.queryS

var diff

function addclass() {  
    var random = Math.floor((Math.random() * 13) + 1);
    if (random === 1) {
        diff = 'first'
    } else if (random === 2) {;
        diff = 'second'
    } 
    else if (random === 3) {;
        diff = 'third'
    }
    else if (random === 4) {;
        diff = 'fourth'
    }
    else if (random === 5) {;
        diff = 'fifth'
    }
    else if (random === 6) {;
        diff = 'sixth'
    }
    else if (random === 7) {;
        diff = 'seventh'
    }
    else if (random === 8) {;
        diff = 'eighth'
    }
    else if (random === 9) {;
        diff = 'nineth'
    }
    else if (random === 10) {;
        diff = 'tenth'
    }
    else if (random === 11) {;
        diff = 'eleventh'
    }else if (random === 12) {;
        diff = 'twelth'
    }else {
        diff = 'third'
    }
}



// Add 20 items.
var nextItem = 1;
var loadMore = function () {
    for (var i = 0; i < 30; i++) {
        var item = document.createElement('p');
        item.innerText = 'All work and no play makes Kajetan a dull boy.';
        listElm.appendChild(item);
        addclass();
        item.setAttribute("class", diff)
    }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function () {
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        loadMore();
    }
});

// Initially load some items.
loadMore();

// + listElm.clientHeight