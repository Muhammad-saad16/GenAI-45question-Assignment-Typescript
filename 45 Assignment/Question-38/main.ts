//Question 38:

/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.
*/



function describe_thecity(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_thecity();//for print default city and country
describe_thecity("Lahore"); //for print default country
describe_thecity("Tokyo", "Japan"); 
