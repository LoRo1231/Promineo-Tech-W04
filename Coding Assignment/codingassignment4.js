console.log("Question 1:");

const ages = [3,9,23,64,2,8,28,93];
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

//The expected output should be 77, but I am still receiving 90.

console.log("Question 1 (c):");


