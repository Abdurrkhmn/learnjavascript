let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Cokelat
42.5
22
true
Programming
undefined (karena 5 tidak ada di index)
Panjang nilai myArray adalah 5.
Note : untuk menambahkan data ke dalam array, 
kita bisa menggunakan metode push().
Sedangkan untuk mengeluarkan data atau elemen terakhir dari array,
kita bisa gunakan metode pop() 
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.pop();
console.log(myArray);

/* output
[ Cokelat, 42.5, 22, true ]
*/

