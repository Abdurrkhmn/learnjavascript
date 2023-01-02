const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded; // or u can deleted
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');

/*Output
Out of Stock!
Thank you */