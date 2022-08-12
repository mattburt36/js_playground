// Write a function that takes in an integer minutes and returns seconds 
//const convert = (min) => min * 60

// Write a function that takes any two numbers return true if sum of both numbers is less than than 100 
//function check(a,b)
//{
//    if(a + b < 100)
//    {
//        return true;
//    }
//    else
//    {
//        return false; 
//    }
//}

//const check = (a,b) => (a + b) < 100;

// Write a function that takes two numbers; hours and minutes and convert to seconds 
//function convertHourMin(hour, min)
//{
//    var hourConvert = hour * 3600
//    var minConvert = min * 60 

//    return hourConvert + minConvert
//}

//const convertHourMinute = (hour, min) => (hour * 3600) + (min * 60);

// Write a function that returns the length of a string 
// Create a function in ES6 whci defines a const variable, then passes the value test to itself and 
//const test = ({length}) => length;

//function test1(str)
//{
//   return str.length
//}

//console.log(test1("Hello"))
//console.log(typeof test)

//console.log(test("Hello"))

//Write function that takes array of numbers and returns an inverted array 
// function invertArr(arr)
// {
//     var newArray = []

//     for(i = 0; i < arr.length; i++)
//     {    
//         newArray[i] = arr[i] - (arr[i]*2)
//     }

//     return newArray;
// }

// console.log(invertArr([0,1,2,3,4]))

// //ES6 
// let inv = a => a.map(b => b -b || 0)

// console.log(inv([1,2,3,4]))

// //Write a function that takes a string of lowercase and return it in uppercase and reversed
// function revUpper(str)
// {
//     return str.split("").reverse().join("").toUpperCase();
// }

// console.log(revUpper("hi"))

// const word = string => { return string.toUpperCase().split("").reverse().join("") }

// console.log(word("Hello"))

// //Write a function that takes an array of numbers and returns the sum of all vlaues within the array 
// const sum = (arr) => { return arr.flat(Infinity).reduce((a,b) => a+b)}

// console.log(sum([2,3,[4,5]]))

var sum = Infinity
console.log(sum)