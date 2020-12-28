//1-dasgal
var countries = ['United States', 'China', 'Japan', 'Germany', 'India', 'United Kingdom', 'France', 'Italy', 'Brazil', 'Canada', 
                 'Russia', 'South Korea', 'Spain', 'Australia', 'Mexico', 'Indonesia', 'Netherlands', 'Saudi Arabia', 'Mongolia', 'Switzerland']
for (var i = 0; i < countries.length; i+=2)
    console.log(i+1 +'. '+ countries[i])

console.log('\n')

//2-r dasgal
let a = parseInt(prompt("Too oruulna uu: "));
let c = a.toString();
let b = c.split("").reverse().join("");
console.log(c)
console.log(b)
if(c === b){
    console.log("Palindrom bn");
}else{
    console.log("Palindrom bish bn");
}