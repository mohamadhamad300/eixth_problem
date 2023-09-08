/*
@everyone 
Bubble sort is the most basic sorting algorithm in all of Computer
 
Science dom. It works by starting at the first element of an array and
comparing it to the second element; if the first element is greater than the
second element, it swaps the two. It then compares the second to the third,
and the third to the fourth, and so on; in this way, the largest values
"bubble" to the end of the array. Once it gets to the end of the array, it
starts over and repeats the process until the array is sorted numerically.
*
Implement a function that takes an array and sorts it using this technique.
Don't use JavaScript's built-in sorting function (Array.prototype.sort).
*
QUERY: What's the time complexity of your algorithm? If you don't already
know, try to intuit this without consulting the Googles.
*
Extra credit: Optimization time! During any given pass, if no elements are
swapped we can assume the list is sorted and can exit the function early.
After this optimization, what is the time complexity of your algorithm?
*
More credits: Do you need to consider every element every time you iterate
through the array? Again: Has the time complexity of your algorithm changed?
/

const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
/
 
Example usage:
bubbleSort([2, 1, 3]); // yields [1, 2, 3]
*
*/


let bubbleSort =(arraytoSort)=>{

    let item=arraytoSort[0];
let i=0,j=0;
    while(i<arraytoSort.length){
   let largestitem =arraytoSort[i];
   j=0;
   while(j<arraytoSort.length){
if(arraytoSort[i]<arraytoSort[j]){
    /*
    console.log("swapo")
    swapvalue=item;
item=arraytoSort[i];
arraytoSort[i-1]=item;
arraytoSort[i]=swapvalue;
*/
var itemToSwap=arraytoSort[j];
arraytoSort[j]=arraytoSort[i];
arraytoSort[i]=itemToSwap;
console.log(itemToSwap+"   "+i+"   "+j)
}
else {

}
j++;
console.log(j);
console.log(arraytoSort)
}

        i++;
     //   console.log(i)
    }
return arraytoSort;
}
x=[7, 5, 4,1,34,77]
x=bubbleSort(x);
console.log(x);