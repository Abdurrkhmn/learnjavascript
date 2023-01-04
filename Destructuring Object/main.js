//Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);
 
/* output:
John Doe 18
note: tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi.
Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. 
Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya,
example 
const {lastName} = profile;
*/