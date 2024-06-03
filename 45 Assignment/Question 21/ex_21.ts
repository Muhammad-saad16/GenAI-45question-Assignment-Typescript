//Question 21
/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/


let objectContainingItems : {[key:string]:any} = {
  "laptop" : {
    name:"laptop",
    price: 8000,
    description: "high performance laptop with fast processor"
  },
  "mouse" : {
    name:"mouse",
    price: 10000,
    description: "high performance laptop with fast processor"
  },
  "keyboard" : {
    name:"keyboard",
    price: 5000,
    description: "high performance laptop with fast processor"
  },
}

console.log(objectContainingItems);
