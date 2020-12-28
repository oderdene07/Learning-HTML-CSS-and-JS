//#1

// let a = parseInt(prompt("Ehnii toog oruulna uu: "));
// let b = parseInt(prompt("2dahi toog oruulna uu: "));
// let c = parseInt(prompt("3dahi toog oruulna uu: "));
// let count = 0;
// if(a === 0){
//     count++;
// }
// if(b === 0){
//     count++;
// }
// if(c === 0){
//     count++;
// }
// console.log(count);

// #2

// for (let i = 0; i < 100; i++) {
//     console.log(i+1 + ". Sain baina uu!"); 
// }               

// #3

// for (let i = 10; i < 100; i++) {
//     console.log(i);
// }

// #4

// let a = parseInt(prompt("Ehnii toog oruulna uu: "));
// let b = parseInt(prompt("2dahi toog oruulna uu: "));

// let c = a;
// for (let i = 1; i < b; i++) {
//     a *= c
// }
// console.log(a);

// #5

// let a = parseInt(prompt("Too oruulna uu: "));

// a = a.toString();
// console.log(a.length);

// #6

// let a = parseInt(prompt("Too oruulna uu: "));

// let sum = 0;
// let c;
// while(a > 0){
//     c = a % 10;
//     sum += c;
//     a = Math.floor(a/10);
// }
// console.log(sum);

// let arr = Array.from(String(a), Number);
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// #7

// let a = parseInt(prompt("Toog oruulna uu: "));
// let count = 0;

// let array = Array.from(String(a), Number);
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log(count);

// let c;
// while(a > 0){
//     c = a % 10;
//     if(c % 2 === 0){
//         count++;
//     }
//     a = Math.floor(a/10);
// }
// console.log(count);

// #8

// let a = parseInt(prompt("Too oruulna uu: "));
// let count = 0;

// let array = Array.from(String(a), Number);
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         count++;
//     }
// }
// console.log(count);

// let c;
// while(a > 0){
//     c = a % 10;
//     if(c % 3 === 0){
//         count++;
//     }
//     a = Math.floor(a/10);
// }
// console.log(count);

// #9

// let a = parseInt(prompt("Too oruulna uu: "));
// let sum = 0;

// let c;
// while(a > 0){
//     c = a % 10;
//     if(c % 2 === 0){
//         sum += c
//     }
//     a = Math.floor(a/10);
// }
// console.log(sum);

// let array = Array.from(String(a), Number);
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         sum += array[i];
//     }
// }
// console.log(sum);

// #10

// let a = parseInt(prompt("Toog oruulna uu: "));
// let c = a.toString();
// let b = c.split("").reverse().join("");
// if(c === b){
//     console.log("Palindrom bn");
// }else{
//     console.log("Palindrom bish bn");
// }

// for (let i = 0; i < b.length; i++) {
//     if(b[i] === c[i]){
//         console.log("Palindrom bn");
//     }else{
//         console.log("Palindrom bish bn");
//         break;
//     }
// }

// #11

// let a = parseInt(prompt("Toog oruulna uu: "));
// let i = 0;
// let arr = [];
// while (a > 0) {
//     if (a % i === 0) {
//         arr.push(i);
//     }
//     i++;
//     a--;
// }
// console.log(arr);   

// #12

// let a = parseInt(prompt("Toog oruulna uu: "));
// let i = 2;
// let count = true;
// while (a-1 > 0) {
//     if (a % i === 0) {
//         count = false;
//     }
//     i++;
//     a--;
// }
// if(count)
//     console.log("anhnii too");
// else
//     console.log("anhnii too bish");




// var a = [1, 10, 5, 9, 7, 2];
// var result = [];
// var n = a.length;

// for(var i = 0; i < n; i++){
//     var index = 0;
//     var min = a[0];
//     for(var j = 0; j < n; j++){
//         if(a[j] < min){
//             min = a[j];
//             index = j;
//         }
//     }
//     result.push(min);
//     a.splice(index, 1);
// }
// console.log(result);

// for(let i = 0; i < 5; i++)               turshilt
//     for(let j = 0; j < 5; j++)           turshilt
//         console.log(j)                   turshilt




// function sum(x, y, z){
//     return x + y + z;
// }

// function max(x, y, z){
//     x > y && x > z ?  console.log('Hamgiin ih n = ' + x) : 
//     y > z && y > x ?  console.log('Hamgiin ih n = ' + y) : 
//     console.log('Hamgiin ih n = ' + z)
// }

// function min(x, y, z){
//     x < y && x < z ?  console.log('Hamgiin baga n = ' + x) : 
//     y < z && y < x ?  console.log('Hamgiin baga n = ' + y) : 
//     console.log('Hamgiin baga n = ' + z)
// }

// var sum = sum(15, 20, 25);
// console.log('Niilber = ' + sum);
// var max = max(15, 20, 25);
// var min = min(15, 20, 25);

// function insertionSort(arr){
//     for(var i = 1; i < arr.length; i++){
//         var currentVal = arr[i]
//         for( var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
//             arr[j + 1] = arr[j]
//             arr[j] = currentVal
//         }
        
//     }
//     return arr;
// }

// var insertion = insertionSort([12, 56, 0, 5, 8, 7, 1 , 2, 3, 0 , 2])
// console.log(insertion);



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var odd = [];

// for(var i = 1; i <= 10; i++)
//     arr.push(i);

// console.log(arr);

// function oddNumbers(arr){
//     if(arr.length > 0){
//         if(arr[0] % 2 === 1){
//             odd.push(arr[0]);
//         }
//         arr.shift();
//         oddNumbers(arr);
//     }
// }
// oddNumbers(arr);
// console.log(odd);



// function oddNumbers(arr){
//     for(var i = 0; i < arr.length; i++)
//         if(arr[i] % 2 === 0)
//             odd.push(i);
//     return odd;
// }
// oddNumbers(arr);
// console.log(odd);



// function sum(arr, arr1){
//     var result = [];
//     if (arr1.length > arr.length)
//         for(var j = arr.length; j < arr1.length; j++)
//             arr[j] = 0
//     if (arr1.length < arr.length)
//         for(var k = arr1.length; k < arr.length; k++)
//             arr1[k] = 0
//     for(var i = 0; i < arr.length; i++)
//         result.push(arr[i] + arr1[i])
//     return result;
// }
// function mult(arr, arr1){
//     var result = [];
//     if (arr1.length > arr.length)
//         for(var j = arr.length; j < arr1.length; j++)
//             arr[j] = 0;
//     if (arr1.length < arr.length)
//         for(var k = arr1.length; k < arr.length; k++)
//             arr1[k] = 0
//     for(var i = 0; i < arr.length; i++)
//         result.push(arr[i] * arr1[i])
//     return result;
// }

// arr = [1, 2, 3, 4, 5, 6, 7];
// arr1 = [6, 7, 8, 9, 10];
// var vinalsum = sum (arr, arr1);
// var vinalmult = mult (arr, arr1);
// console.log(vinalsum);
// console.log(vinalmult);



// function mergeArr(arr, arr1){
//     result = [];
//     var i = 0;
//     var j = 0;
//     while(arr.length > i && arr1.length > j){
//         if(arr[i] > arr1[j]){
//             result.push(arr1[j]);
//             j++;
//         }
//         else{
//             result.push(arr[i]);
//             i++;
//         }
//     }
//     while(arr.length > i){
//         result.push(arr[i]);
//         i++;
//     }
//     while(arr1.length > j){
//         result.push(arr1[j]);
//         j++;
//     }
//     return result;
// }


// arr = [1, 3, 5];
// arr1 = [0, 2, 4, 6];
// var mergedArray = mergeArr(arr, arr1);
// console.log(mergedArray);





// function isNumber(a){
//     typeof(a) === 'number' ? console.log('Ene bol too') : console.log('Ene bol too bish');
// }
// isNumber(8);



// var a = parseInt(prompt("Too oruulna uu: "));

// function countDigits(a){
//     var b = a.toString();
//     console.log(b.length);
// }
// countDigits(a);



// var too = +prompt('too oruulna uu:');
// console.log(typeof(too));

// var new_too = too.toString();
// console.log(typeof(new_too));
