console.log("Question 1:");

let ages = [3,9,23,64,2,8,28,93];
console.log(ages);

//-----------------------------------------

console.log("Question 1 (a):");

function returnLast (ages) {
    return ages.at(-1);
}

function returnFirst (ages) {
    return ages.at(0);
}

const a = returnFirst(ages);
const b = returnLast(ages);

console.log(b - a);

//the .at method will allow you to return a value at an idex rather than the index itself
// which I was running into alot. By creating functions, finding the first & the last element
// in my array will be repeatbale when other elements are added or taken away.

//-----------------------------------------

console.log("Question 1 (b):");

ages.push(80);
console.log(ages);

console.log(b - a);
//const c = returnLast(ages);
//console.log(c - a); this code will return the correct value bu tnot what I need

//The expected output should be 77, but I am still receiving 90. Looks like the function above
// doesn't work as expected....lol
// after creating a new variable the code ran properly... need to find a way for the code
// to keep running without adding more variable - maybe a loop?

//------------------------------------------

console.log("Question 1 (c):");

const startingValue = 0;

const ageSum = ages.reduce ((accumulator, currentValue) => accumulator + currentValue, startingValue);
const averageAge = (ageSum / ages.length);
console.log(averageAge);

// the .reduce will iterate through the array, adding each element to the next - returning a sum
// so next to find the average we can take that sum that was returned and divide it by the length of the array

//-------------------------------------------

console.log("Question 2:");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//--------------------------------------------

console.log("Question 2 (a):");

//first we need to find the sum of each element in the array, names[i].length will allow
//us to retrieve the length of each element instead of the length of the array. By creating
//a for loop we can iterate throught each element until we reach the end.

let counter = 0;
for (let i = 0; i < names.length; i++){
    counter += names[i].length;
}

//now we can take our sum & divide by the length of the whole array to find the average.

let averageNameLength = counter / names.length;
console.log(averageNameLength);

//---------------------------------------------

console.log("Question 2 (b):");

//names[i] will let us add each element followed by a space " ", the counter is set to 0
//so that it has a starting point & will stop once we reach the length of the array.

let total = 0;

for (let i = 0; i < names.length; i++){
    nameList = total += names[i] + " ";
}

console.log(nameList);

//this is logging with 0 at the beginning of the list from the nameList variable being
//set to 0. Not sure how to make that go away.

//------------------------------------------------

console.log("Question 3:");

console.log(`By using the arrayName.length - 1. Since the array indexes at 0,
you'll want the full length of the array minus 1 to find the value in the last element`);


//--------------------------------------------------

console.log("Quesion 4:");

console.log(`By using the arrayName[0], the first element of an array is always at 0.`);

//-------------------------------------------------

console.log("Question 5:");

let nameLengths = [];
let sumCounter = 0;

for (let i = 0; i < names.length; i++){
    let nameLength = names[i].length;
    let total = nameLength + sumCounter;
    nameLengths.push(total);
 }

 console.log(nameLengths);

 //--------------------------------------------------

 console.log("Question 6:");