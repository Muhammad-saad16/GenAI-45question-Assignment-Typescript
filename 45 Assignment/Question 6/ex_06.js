//Question 6
/*
Store a person’s name, and include some whitespace characters at the beginning and end of
the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the nameonce, so the whitespace around the name is displayed. Then print the name after striping the white
spaces.
*/
let nameWithWhiteSpace = "\t \n hina naseer \t \n";
console.log("name With white space", nameWithWhiteSpace);
let strippedName = nameWithWhiteSpace.trim();
console.log("stripped Name:", strippedName);
export {};
