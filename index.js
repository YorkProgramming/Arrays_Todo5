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

function balancePoint(arr) {
    var sum = 0;
    var leftSum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (leftSum == sum - leftSum) {
            return true;
        }
        leftSum += arr[i];
    }
    return false;
}

//Example
console.log(balancePoint([1, 2, 3, 4, 10]));
console.log(balancePoint([1, 2, 4, 2, 1]));

//We set var sum to 0
//We set var leftSum to 0
//We loop through the array and add each value to sum
//We loop through the array and check if leftSum is equal to sum - leftSum
//If it is, we return true
//If not, we add the value of the current index to leftSum
//If we never return true, we return false

//#####################################################################################################################

//3.
//Balance Index

/* Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side
(exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 . */

function balanceIndex(arr) {
    var sum = 0;
    var leftSum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (leftSum == sum - leftSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}

//Example
console.log(balanceIndex([-2, 5, 7, 0, 3]));
console.log(balanceIndex([9, 9]));

//We set var sum to 0
//We set var leftSum to 0
//We loop through the array and add each value to sum
//We loop through the array and check if leftSum is equal to sum - leftSum - arr[i]
//If it is, we return i
//If not, we add the value of the current index to leftSum
//If we never return i, we return -1

//#####################################################################################################################