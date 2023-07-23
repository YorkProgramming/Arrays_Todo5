//1.
//Average (Warmup)

/* (Warm-up) Always run through some quick algorithm problems before any coding interview, 
to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers. */

function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

//Example
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//We set var sum to 0
//We loop through the array and add each value to sum
//We return the sum divided by the length of the array

//#####################################################################################################################

//2.
//Balance Point

/* Write a function that returns whether the given array has a balance point between indices,
where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4),
but [1,2,4,2,1] → false . */

