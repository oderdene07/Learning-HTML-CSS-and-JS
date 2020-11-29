//1-r dasgal
var c = 15
var d = 125
for(var i = c; i <= d; i++)
    if(i % 3 === 0 && i % 2 === 1)
        console.log(i)
console.log('\n')

//2-r dasgal
var a = parseInt(prompt("1-r too"))
var b = parseInt(prompt("2-r too"))
if (a < b)
    for(var i = b; i >= a; i--){
        console.log(i)
    }
else 
    for(var i = a; i >= b; i--){
        console.log(i)
    }
console.log('\n')

//3-r dasgal
var sum = 0
if (a < b)
    for(var i = a; i <= b; i++){
        console.log(i)
        sum = sum + i
    }
else 
    for(var i = b; i <= a; i++){
        console.log(i)
        sum = sum + i
    }
console.log('Niilber = ' + sum)



