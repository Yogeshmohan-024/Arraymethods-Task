// create an array of your favorite fruits. add a new fruit to the end and remove the last friuts.

function push_pop(){
    let Fruits=["Apple","Orange","Kiwi","Mango","Graph","Jackfriut"];
    Fruits.push("Avocada");
   Fruits.pop();
   return(Fruits)
}
console.log(push_pop());

// use spilce() to replace the second element in array with two new element.

function spilce(){
    let number =[20,40,50,70,30,10]
    number.splice(2,1,100);
    return(number)
}
console.log(spilce());

// Use slice() To create a new array that contains a subset of elements from the original array.

function slice(){
    let names=["arun","kumar","jaya","deva","jesus"]
    let slice_result=names.slice(1,3);
    return(slice_result)
}
console.log(slice());

// Create two array,one with number and another with letters.use concat() to merge them into one array.

function concat(){
    let num=[1,2,3,4,5];
    let words=["one","two","three","four","five"];
    let concat_result=num.concat(words);
    return(concat_result);
}
console.log(concat());

// use map() to create a new array where each element is doubled. then use filter.then use filter() to keep only the even numbers.

function map_filter(){
    let value=[3,4,1,7,9];
    let map_result = value.map(value=>value*2);
    let filter_result = map_result.filter(map_filter=>map_filter % 2 === 0);
    return(filter_result);
}
console.log(map_filter());