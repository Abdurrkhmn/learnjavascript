//Destructuring Assignment
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 //perlu membungkusnya dengan tanda kurung. 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/