var ekran = document.getElementById("wpisz")
var dzialanie
var przyciski = document.getElementsByClassName('btn');
var ekraninside = ekran.textContent;
var array
var lastelement


function wcisnijDodatkowy() {
    przyciski[0].onclick = function () {
        var innerHTML = document.getElementById('wpisz').innerHTML;
        document.getElementById('wpisz').innerHTML = ''
//            innerHTML.substr(0, innerHTML.length - 1)
    };
}

wcisnijDodatkowy();

function wcisnijLiczba() {
    przyciski[3].onclick = function () {
        dzialanie = ekran.innerHTML += 7;
    };

    przyciski[4].onclick = function () {
        dzialanie = ekran.innerHTML += 8;
    }

    przyciski[5].onclick = function () {
        dzialanie = ekran.innerHTML += 9;
    }

    przyciski[7].onclick = function () {
        dzialanie = ekran.innerHTML += 4;
    }

    przyciski[8].onclick = function () {
        dzialanie = ekran.innerHTML += 5;
    }


    przyciski[9].onclick = function () {
        dzialanie = ekran.innerHTML += 6;
    }

    przyciski[11].onclick = function () {
        dzialanie = ekran.innerHTML += 1;
    }

    przyciski[12].onclick = function () {
        dzialanie = ekran.innerHTML += 2;
    }

    przyciski[13].onclick = function () {
        dzialanie = ekran.innerHTML += 3;
    }

    przyciski[15].onclick = function () {
        dzialanie = ekran.innerHTML += 0;
    }

    przyciski[16].onclick = function () {
        if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += '0.'
        } else if (ekran.innerHTML = dzialanie) {
            dzialanie = ekran.innerHTML += ".";
        }
    }
}
    wcisnijLiczba();

wcisnijDzialanie();
function wcisnijDzialanie() {
        przyciski[1].onclick = function () {
                        array = dzialanie.split('');
            lastelement = array[array.length-1];
            if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += ''
            } else if ((lastelement == '%')||(lastelement == '+')||(lastelement == '-')||(lastelement == '*')||(lastelement == '/')) {
            dzialanie = ekran.innerHTML += ''
        }
         else {
            dzialanie = ekran.innerHTML = ekran.innerHTML.concat('%')
        }
        };
        przyciski[2].onclick = function () {
                        array = dzialanie.split('');
            lastelement = array[array.length-1];
          if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += ''
        } else if ((lastelement == '%')||(lastelement == '+')||(lastelement == '-')||(lastelement == '*')||(lastelement == '/')) {
            dzialanie = ekran.innerHTML += ''     
        } else {
            dzialanie = ekran.innerHTML = ekran.innerHTML.concat('+')
            }
        };
        przyciski[6].onclick = function () {
            array = dzialanie.split('');
            lastelement = array[array.length-1];
            
  if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += ''
        } else if ((lastelement == '%')||(lastelement == '+')||(lastelement == '-')||(lastelement == '*')||(lastelement == '/')) {
            dzialanie = ekran.innerHTML += ''
        }
            else{
            dzialanie = ekran.innerHTML = ekran.innerHTML.concat('-')
            }
        }
        
        przyciski[10].onclick = function () {
                        array = dzialanie.split('');
            lastelement = array[array.length-1];
  if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += ''
        } else if ((lastelement == '%')||(lastelement == '+')||(lastelement == '-')||(lastelement == '*')||(lastelement == '/')) {
            dzialanie = ekran.innerHTML += ''
        }
            else {
            dzialanie = ekran.innerHTML = ekran.innerHTML.concat('*')
        }
        };
        przyciski[14].onclick = function () {
                        array = dzialanie.split('');
            lastelement = array[array.length-1];
  if (ekran.innerHTML === '') {
            dzialanie = ekran.innerHTML += ''
        } else if ((lastelement == '%')||(lastelement == '+')||(lastelement == '-')||(lastelement == '*')||(lastelement == '/')) {
            dzialanie = ekran.innerHTML += ''
        }
            else {
            dzialanie = ekran.innerHTML = ekran.innerHTML.concat('/');
//            this.onclick = null;
        }     
        };
}


    function liczymy() {
        przyciski[17].onclick = function () {
            if(ekran.innerHTML === ''){
                ekran.innerHTML = ''
            }else if(ekran.innerHTML = dzialanie){
            ekran.innerHTML = eval(dzialanie);
        }
//            console.log(dzialanie);
//            var array = dzialanie.split('');
//            console.log(array);
            
            
//            var lastthingarray = [];
            
//            lastthingarray.push(dzialanie);
//            lastthingarray.split;
            

//            console.log(lastthingarray);
            
    }
    }

//var array = dzialanie.split('');
//console.log(array);
//function doit(){
//    
//    console.log(array);
//}
//for(i=0; i<przyciski.length; i++){
//    przyciski[i].onclick = function () {
//    doit();
//    };
//}

    liczymy();
