const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
note: keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. 
Untuk menghapus elemen, gunakan metode splice()
example
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/