// The unshift() method in array objects adds one or more elements to the **START** of an array. When executed, it also returns the new length of an array
let MyArray= [1,2,3,4];
let NewArray = MyArray.unshift(5,2,3);
console.log(MyArray);
// ---------------------------------------------
// The push() method of an array appends one or more elements to the end of it. Just like unshift(), it also returns the new length of the array
const MyArray1 = [1, 2, 3]
const NewArray1 = MyArray1.push(4, 5, 6, 7);
console.log(MyArray1);
// ------------------------------------------------
// Merging or joining of two or more arrays is achieved by an array's concat() method. It creates a new copy of the output and does not affect the original arrays. Unlike the previous methods, it returns a new array. The values being concatenated always come at the end of the array using the method.
const MyArray2 = [1, 2, 3];
const NewArray2 = [4, 5, 6];
const ExampleNewArray = MyArray2.concat(NewArray2);

console.log(ExampleNewArray);
// You can also to this with concat array
const MyArray3 = [1,2,3];
const NewArray3 = MyArray3.concat('12', true, null, 4,5,6,'Mamamd');
console.log(NewArray3);
// And This
const MyArray4 = [1, 2, 3];
const MyArray5 = [4, 5, 6];
const MyArray6 = [7, 8, 9];
const AllTheArray = MyArray4.concat(MyArray5, MyArray6);
console.log(AllTheArray);
// ------------------------------------------------
// The splice() method adds, removes and replaces elements in an array. It is commonly used for array management. This method does not create a new array but updates the one that called it.
const cities = ['Dubai', 'Tehran', 'NewYork', 'Shanghai']
const ExtraCities = cities.splice(2, 0, 'London');
console.log(cities);

// Tutorial to use splice() ---> General Syntax = let removedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// start - The index at which to begin modifying the array.

// deleteCount - The optional number of items in the array to remove from start. If omitted, then all the items after start will be deleted.

// item1, item2, ... - The optional items to append to the array from start. If omitted, it will only remove elements from the array.

// We can also use this syntax like this
const days = ['monday', 'tuesday', 'saturday', 'sunday', 'thursday', 'friday']
const DayReplacement = days.splice(2, 2, 'wednesday');
console.log(days);