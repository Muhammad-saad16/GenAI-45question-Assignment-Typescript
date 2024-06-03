//Question 41

/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/


let magicians: string[] = ["Bruce", "Clark", "Peter", "Logan", "Wade"];

function show_magic(Magicians:string[]) {
    Magicians.forEach(Magician => {
        console.log(Magician);
    });
}
show_magic(magicians);

