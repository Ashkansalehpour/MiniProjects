 // Type Every sentence

 let text = "Hello world, welcome to the universe we we.";
 let count = (text.match(/w/g) || []).length; 
// The g in the regular expression (short for global) says to search the whole string rather than just find the first occurrence.
 console.log(count);

