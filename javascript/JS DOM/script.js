
function info(){
    var btn = document.querySelector('#btn');
    var info = document.querySelector('#displayInfo');
    var ner = prompt('Ta ner ee oruulna uu');
    var nas = +prompt('Ta nas aa oruulna uu');
    info.innerHTML = 'Tanii ner: ' + ner + '<br> Tanii nas: ' + nas;
    btn.style.display = 'Block';
}

var players = ['Lebron James', 'Michael Jordan', 'James Harden']
var pick = Math.floor(Math.random() * players.length)

function display(){
    var ans = document.querySelector('#answer');
    var pic1 = document.querySelector('#james');
    var pic2 = document.querySelector('#jordan');
    var pic3 = document.querySelector('#harden');
    
    ans.innerHTML = 'Tanii NBA-iin dur bol ' + players[pick];
    if(pick === 0){
        pic1.style.display = 'Block';
    }
    else if(pick === 1){
        pic2.style.display = 'Block';
    }
    else{
        pic3.style.display = 'Block';
    }
}
