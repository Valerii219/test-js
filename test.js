// // function multiply(message, price) {
// //     // Тіло функції
    
// //     console.log("Це лог на момент виклику функції multiply");}
// //     multiply("JavaScript is in my blood", 10);
// //     console.log("JavaScript is in my blood" + "," + " " + 10)
// //     let result =  multiply("JavaScript is in my blood", 10);
    
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);

// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// const a = fruits.length;
// console.log(a);
// console.log(fruits);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);
// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i +=1 ) { // Change this line
//   console.log(i);
// }
// function calculateTotal(number) {
//     // Change code below this line
//    let total = 0;

//    for (let i = 1; i <= number; i +=1 ) { // Change this line
//      console.log(number);
//    }
//    return total = total + number;

// //      // Change code above this line
// //    }

// function createArrayOfNumbers(min, max) {
//   const numbers = [1, 3];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i +=1) 
//   numbers[0] = min;
//   numbers[1] = max;
//   numbers =  numbers[0].push(numbers[0] + 1);

//   // Change code above this line
//   return numbers;
// }



// function calculateTotalPrice(productName) {
//   // Change code below this line
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  


  


//   // Change code above this line
// }

// const fnA = function(message, callback) {
//   console.log(message);

// console.log(callback);}

// const  fnB = function ( pizza) {

//     console.log(dsffdsf)
// };

//    fnA("ewgsdgdsg", fnB);
//    const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   const names = students.map(student => student.score);
//   console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

//   const scores = [27, 2, 41, 4, 7, 3, 75];
//   const copy = [...scores].sort();

// console.log(copy) //(7) [2, 27, 3, 4, 41, 7, 75]

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores) //(6) [19, 35, 56, 61, 74, 92]
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => { 
//   return total + (player.playtime / player.gamesPlayed)
// }, 0);

// const one = 

// console.log(totalAveragePlaytimePerGame);


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// },  0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
const users = 
 [ {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },]
  const sortByAscendingBalance =  [...users].flatMap(user => user.friends).sort((a,b) =>{
  
  if (a == b) { return 0}
  })
  

// a.friends.localeCompare(b.friends) })
  
console.log(sortByAscendingBalance)
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author ).sort((a,b) => a.author - b.author)
// console.log(names)
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);
