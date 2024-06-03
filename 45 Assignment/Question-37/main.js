//Question 37
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = "large", message = "I love coding in night") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("small"); // Default message, small size
make_shirt("medium", "Coding vs Error"); // Custom message, medium size
export {};
