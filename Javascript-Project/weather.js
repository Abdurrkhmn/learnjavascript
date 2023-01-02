//Current temperature in kelvin degree.
const kelvin = 0;
//Converting kelvin to celcius.
const celcius = kelvin - 373;
//Convert celcius to fahreinheit.
let fahrenheit = celcius * (9/5) + 32;
//Round down fahrenheit variable. 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/*
 Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`); */
