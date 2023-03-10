//Destructuring Assignment
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile);
// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment
 
console.log(firstName);
console.log(age);
 
/* output:
John
18
note:destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. 
Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, 
sementara block statement tidak bisa berada pada sisi kiri assignment.
*/