console.log("hello world")

const numbers = [12, 24, 2, 49, 59, 68, 71, 82, 99];

function getLength (array){
    return array.length;
}
console.log(`You have given ${getLength(numbers)} numbers.`);


function getSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(`The sum of your numbers is ${getSum(numbers)}.`);

/*Explanation of code: you define the sum as 0 because you havent added
anything to it YET, think about let vs const once again */

/*explanation of for loop 3 parts: we start with 0 iterations, and we want our condition for the loop to be
iterations is less than the length of the array, and then we define that using i++*/

function getMean(array){
    const sum = getSum(array);
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean = sum / array[i];
        
    }
    return mean;
}
console.log(`The mean of your numbers is ${getMean(numbers)}.`);

function getMin(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
    
}
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);

function getMax(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
    
}
console.log(`The largest of your numbers is ${getMax(numbers)}.`);

//ask about this in class: why is the min and max the first number in the array?
//the lines I dont quite understand are 41,44,53,56
//I understand that we are defining the min as the first number in the array, why?
//I think the syntax in my if statement is also throwing me off here. 
//source I used: https://geeksforgeeks.org/how-to-find-min-max-values-without-math-functions-in-javascript/amp/

/*the min is the first number in the array because it has not been compared
 to anything else? */

function getRange(array){
    const min = getMin(array);
    const max = getMax(array);
    return max - min;
}
console.log(`The range of your numbers is ${getRange(numbers)}.`);

/*function getEvens(array){
    let evens = ;
I think I would have to use a for loop with an if statement but Im not sure how to do that,
same with the odds. Can we go over this in class?
}
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
/*console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
*/

//A demo on this would be much appreciated :)