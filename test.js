// function multiply(message, price) {
//     // Тіло функції
    
//     console.log("Це лог на момент виклику функції multiply");}
//     multiply("JavaScript is in my blood", 10);
//     console.log("JavaScript is in my blood" + "," + " " + 10)
//     let result =  multiply("JavaScript is in my blood", 10);
    
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);

const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);
const a = fruits.length;
console.log(a);
console.log(fruits);

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);
const start = 3;
const end = 7;

for (let i = 3; i <= 7; i +=1 ) { // Change this line
  console.log(i);
}
function calculateTotal(number) {
    // Change code below this line
   let total = 0;
   
   for (let i = 1; i <= number; i +=1 ) { // Change this line
     console.log(number);
   }
   return total = total + number;
   
     // Change code above this line
   }