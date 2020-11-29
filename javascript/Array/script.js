var Undsen_une = [124000, 48000, 268000];
var tip = [];
var Niit_une = [];

for(var i = 0; i < Undsen_une.length; i++){
    tip.push(tip_tootsoh(Undsen_une[i]))
    console.log(i + 1 + '-r restoranii tip: ' + tip[i])
}

for(var i = 0; i < Undsen_une.length; i++){
    Niit_une.push(Undsen_une[i] + tip[i])
    console.log(i + 1 + '-r restoranii niit une: ' + Niit_une[i])
}

function tip_tootsoh(payment){
    if (payment < 50000)
        return payment * 20/100;
    else if (payment < 200000 && payment > 50000)
        return payment * 15 / 100
    else
        return payment * 10 / 100
}
