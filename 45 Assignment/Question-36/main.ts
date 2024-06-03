//Question 36
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/


function the_shirt(size:string, message: string) {
    console.log(`Making a ${size} t-shirt with message "${message}" printed on it.`);
}
the_shirt("large", "I love coding");