//Question 43
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name.

*/


let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = []; // Corrected spelling here
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians; // Added semicolon here
}

function show_magic(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:")
show_magic(magicians); // Shows original names
console.log("Great magicians:")
show_magic(greatMagicians); // Shows modified names

