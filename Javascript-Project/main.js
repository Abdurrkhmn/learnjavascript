//Projec 1 Magic 8 Ball
//ngambil dosa tangannya dipotong di akhirat
let userName = 'Abdur';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'will i came back to Indonesia';
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8) ;

console.log(randomNumber);

let eightBall = '';
switch (randomNumber) {
  case 0:
  eigtBall = 'It is certain';
  break;
  case 1:
  eigtBall = 'It is decidedly so;
  break;
  case 2:
  eigtBall = 'Reply hazy try again'
  break;
  case 3:
  eigtBall = 'Cannot predict now'
  break;
   case 4:
  eigtBall = 'Do not count on it'
  break;
  case 5:
  eigtBall = 'My sources say no'
  break;
  case 6:
  eigtBall = 'Outlook not so good'
  break;
  case 7:
  eigtBall = 'Signs point to yes'
  break;
}

console.log(`The Magic 8 ball says, ${eightBall}`);


