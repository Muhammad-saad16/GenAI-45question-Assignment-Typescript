//Question 45
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function the_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(the_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(the_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
