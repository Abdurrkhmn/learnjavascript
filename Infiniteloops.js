/*Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan (tanpa henti)*/
let i = 1;
 
while (i <= 5) {
    console.log(i);
}

/* for 
for(let i = 1; i <= 5; i=1) {
    console.log(i);
}
Jawabannya adalah karena variabel i selalu bernilai 1. Alhasil,
 kondisi i <= 5 akan selalu bernilai true yang mengakibatkan aplikasi akan terus mencetak 1 ke konsol sehingga mengalami crash.
*/

