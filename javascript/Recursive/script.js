var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sondgoi = [];

function sondgoig_oloh(numbers){
    if (0 < numbers.length){
        if(numbers[0] % 2 === 1){
            sondgoi.push(numbers[0]);
            numbers.shift();
        }
        else
            numbers.shift();

        sondgoig_oloh(numbers);
        
    }
}
sondgoig_oloh(numbers);
console.log('Sondgoi toonuud: ' + sondgoi);
