//1-dasgal
var countries = ['United States', 'China', 'Japan', 'Germany', 'India', 'United Kingdom', 'France', 'Italy', 'Brazil', 'Canada', 
                 'Russia', 'South Korea', 'Spain', 'Australia', 'Mexico', 'Indonesia', 'Netherlands', 'Saudi Arabia', 'Mongolia', 'Switzerland']
for (var i = 0; i < countries.length; i+=2)
    console.log(i+1 +'. '+ countries[i])

console.log('\n')

//2-r dasgal
var a = parseInt(prompt('Too oruulna uu:'))
var final = 0
var b, temp
temp = a
while (a > 0){
    b = a % 10
    a = Math.floor(a / 10)
    final = final * 10 + b
}
if (temp === final){
    console.log('Pallindrome too mun bn')
}
else
    console.log('Bish bn')