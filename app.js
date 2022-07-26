/*function falsyOrTruthy( elem1, elem2) {
    return !elem1 ? elem1 : elem2
}

console.log(falsyOrTruthy( 1, `dog`))


function arrlenght(arr){
    return arr.length
}

console.log(arrlenght([1,2,3]));


function lastelem(elem){
    return elem.length-1
}

console.log(lastelem([0,1,2,3,4,5,6]));


function arrSum(ray){
    let sum = 0
    for ( let i=0; i<ray.length; ++i){
        sum = sum + ray[i];
    }
    return sum;
}

console.log(arrSum([0,1,2,3,100]));


function progressiveSum(num){
    let sum = 0;
    for ( let i = 1; i<= num; ++i){
        sum = sum + i;
    }
    return sum 
}

console.log(progressiveSum(10));


function calcTime(seconds) {
    let timerMinutes = Math.floor (seconds / 60);
    let timerSecond =  seconds % 60;

    if ( timerMinutes.toString().length === 1){
       timerMinutes = `0` + timerMinutes
    }

    return timerMinutes + `:` + timerSecond;
}

console.log(calcTime(230));


function getMax(arr){
    let max = arr[0]
    for ( let i = 1; i < arr.length; ++i){
        if (arr[i]> max){
            max=arr[i]
        }
    }
    return max;
}

console.log(getMax([100,-300,600]))


function reverString(string){
    let reversedString = ``;
   for (let i = 0 ; i<string.length; ++i ){
    reversedString= string[i] + reversedString
   }
   return reversedString;
}

console.log(reverString(`ABC`))



function convertToZero(zero){
    for(let i = 0; i < zero.length; ++i){
        zero[i]=0
    }
    return zero;
}

console.log(convertToZero([5,100,0]));


function convertToZero(king){
    return new Array(king.length).fill(0)
}

console.log(convertToZero([5,100,0,5,6,4,5]));


function fillterApple(str){
    let noApple = []
    for ( let i =0 ; i<str.length; ++i){
        if ( str[i] !== `Apple`){
            noApple.push(str[i])
        }
    }
    return noApple;
}

console.log(fillterApple([`Banana`, `Apple`, `Orange`, `Apple`]));


function fillterApple(str){
    return str.filter(elem  => elem !== `Apple`)
}

console.log(fillterApple([`Banana`, `Apple`, `Orange`, `Apple`]));


function filterOutFalsy(elem5){
    let noFalsy=[];
    for (let i = 0 ; i< elem5.length; ++i){
        if (elem5[i] === true ){
            noFalsy.push(elem5[i])
        }
    }
    return noFalsy
}

console.log(filterOutFalsy([ "isa",null, "cookies", 0]));


function filterOutFalsy(elem4){
    return elem4.filter(elem => !!elem === true)
}
console.log(filterOutFalsy(["banana", "keys" ,0, undefined]))



function convertTocleanBoolean(elem5){
    let boolean = [];
    for (let i = 0 ; i< elem5.length; ++i){
        if (!!elem5[i] === true ){
            boolean.push(`true`)
        }
        else{
            boolean.push(`false`)
        }
    }
    return boolean
}

console.log(convertTocleanBoolean([ 500,0,"david","",[]]));

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i){
        ratings = ratings +  "*"
        if (i !==Math.floor(rating) - 1){
            ratings = ratings + " "
        }
    }
    if ( !Number.isInteger(rating)){
        ratings = ratings + "."
        
    }
    return ratings;
}    

console.log(showRating(4.5))



function sortLowToHight(numbers) {
    return numbers.sort((a, b) => a - b);
}
 

console.log(sortLowToHight([1,5,0,10,4]))


function sortHightLow(numbers) {
    return numbers.sort((a, b) => {
        return b.price - a.price
    });
}
 

console.log(sortHightLow([
    {id: 1, price:50 },
    {id: 2, price:0 },
    {id: 3, price:500 },
]))


 

 
function postByUser(userId){
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then(res =>{
     console.log(res)
     console.log(userId)}
     )
}

postByUser(4)
 



//ASYNC

async function postByUser(userId){
    const promise =await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json() 
     
    const posts=  result.filter(element => element.userId === userId)
    
    console.log(posts)
}

postByUser(4)*/


async function firstSixIncomplete(conmplete){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json() 
     
    const inCompleteTask =  result.filter(element => !element.completed).slice(0, 6);
    
    console.log(inCompleteTask)
}

firstSixIncomplete(false)
