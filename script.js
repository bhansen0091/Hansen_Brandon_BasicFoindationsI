/* //1

var func1ResultArray = [];
function printArray1To255(arr){
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

var test1 = printArray1To255(func1ResultArray);
console.log(test1);

*/

//------------------------------------------------------

/* //2

function getEven1000(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(getEven1000());

*/

//------------------------------------------------------

/* //3

function sumOdd5000(){
    var sum = 0;
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOdd5000());

*/

//------------------------------------------------------

/* //4

var testArr1 = [-5,2,5,12];
var testArr2 = [50,5415,-1000,-3052];

function sumOfArr(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var test1 = sumOfArr(testArr1);
var test2 = sumOfArr(testArr2);

console.log(test1);
console.log(test2);

*/

//------------------------------------------------------

/* //5

var testArr = [-3,3,5,7];

function getMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var test = getMax(testArr);
console.log(test);

*/

//------------------------------------------------------

/* //6

var testArr = [1,3,5,7,20];

function getAverage(arr){
    var average = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}

console.log(getAverage(testArr));

*/

//------------------------------------------------------

/* //7

var testArr = [];
function getArrayOdd() {
    var newArr = []
    for (var i = 0; i <= 50; i++) {
        if (i % 2 != 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

testArr = getArrayOdd();
console.log(testArr);

*/

//------------------------------------------------------

/* //8

var testArr = [1, 3, 5, 7];
var testArr2 = [9,3,7,50,22];
var testY = 3;
var testY2 = 8;
function greaterThanY(arr, y) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter++;
        }
    }
    return counter;
}

var test = greaterThanY(testArr, testY);
var test2 = greaterThanY(testArr2,testY2);
console.log(test);
console.log(test2);

*/

//------------------------------------------------------

 /* //9

var testArr = [1,5,10,-2];

function getSquareArray(arr){
    var square = 0;
    var sqrArr = [];
    for (var i = 0; i < arr.length; i++) {
        square = arr[i] * arr[i];
        sqrArr.push(square);
    }
    return sqrArr;
}

testArr = getSquareArray(testArr);
console.log(testArr);

*/

//------------------------------------------------------

/* //10

var testArr = [1,5,10,-2];
var testArr2 = 
function cancelNegatives(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
            newArr.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var test = cancelNegatives(testArr);
console.log(test);

*/

//------------------------------------------------------

/* //11

var testArr = [1,5,10,-2];
function minMaxAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    var avg = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) { 
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    newArr.push(max);
    newArr.push(min);
    newArr.push(avg);
    return newArr;
}
testArr = minMaxAvg(testArr);
console.log(testArr);

*/

//------------------------------------------------------

/* //12

var testArr = [1,5,10,-2];
function indexSwap(arr) {
    var newArr = arr;
    var temp = newArr[0];
    newArr[0] = newArr[newArr.length-1];
    newArr[newArr.length-1] = temp;

    return newArr;
}

var test = indexSwap(testArr);
console.log(test);

*/

//------------------------------------------------------

 //13

// var testArr = [-1,-3,2];
// function negToString(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "Dojo";
//             newArr.push(arr[i]);
//         }
//         else{
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// var test = negToString(testArr);
// console.log(test);

var testArr = [-1,-3,2];
function negToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(negToString(testArr));