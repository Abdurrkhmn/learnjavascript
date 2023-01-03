/**
 * Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. 
 * Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, 
 * maka nilai di dalamnya akan tergantikan dengan nilai yang baru. dan sebaliknya
 */
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/
