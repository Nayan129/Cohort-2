// ............. Loops And Conditionals ..............
// Question 1
// let age = prompt("enter age");
// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }
// Question 2
// let mul = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${mul} * ${i} = ${mul * i}`);
// }
// Question 3
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i >= 8) {
//     count++;
//     console.log(i);
//   }
// }
// console.log(`numbers greater than 8 are : ${count}`);
// Question 4
// let Password = 3692468;
// let userPass = Number(prompt("enter Password"));
// if (Password === userPass) {
//   console.log("Access Granted", Password);
// } else {
//   alert("Wrong Password");
// }
// Question 5
// let Password = 3692468;
// attempt = 3;
// while (attempt > 0) {
//   let userInput = Number(prompt("Enter Password"));
//   if (userInput === Password) {
//     console.log("Access Granted", Password);
//     break;
//   } else {
//     console.error("wrong password");
//     attempt--;
//   }
//   if (attempt === 0) {
//     console.log("Access Locked");
//   }
// }
// Question 6
// let yes = 0;
// let userInput = prompt("enter Words");

// while (userInput.trim() !== "stop") {
//   userInput = prompt("enter Words again");
//   if (userInput.trim() === "yes") {
//     console.log("yes");
//     yes++;
//   }
// }
// console.log("user type stop");

// Question 7
// for (let i = 1; i <= 51; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// Question 8
// sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// Question 9
// let input = +prompt("enter even number");
// while (input % 2 !== 0) {
//   input = +prompt("enter again");
// }
// console.log(input);

// Question 10
// let start = +prompt("enter start number");
// let end = +prompt("enter end number");
// if (start > end) {
//   console.error("not valid number");
// }
// for (let i = start; i <= end; i++) {
//   console.log(i);
// }

// Question 11
// let odd = 0;
// for (let i = 1; i <= 20; i++) {
//   if (odd === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     odd++;
//   }
// }

// Question 12
// for (let i = 1; i <= 5; i++) {
//   let user = +prompt("enter numbers");
//   if (user < 0) break;
//   console.log(user);
// }

// ........................................................
// functions, Array and object
// Q1
// function sayHello(){
//   console.log('Hello JavaScript');
// }
// sayHello();

// Q2
// function add(a,b){
//   sum = a + b;
//   console.log(sum);
// }
// add(3,4)

// Q3
// function gretting(name = "Guest") {
//   console.log(`Hii ${name}`);
// }
// gretting();

// Q4
// function numbers(...num) {
//   console.log(...num);
// }
// numbers(1, 3, 54, 6, 78);

// Q5
// (function () {
//   console.log("i run instanlty..");
// })();

// Q6 //this is save outer value after outer execution also
// function outer() {
//   let a = 12;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// let outerFnc = outer();
// outerFnc();

// Q7
// let arr = ["guava", "mango", "orange", "pineapple", "strawberry"];
// arr.push("custurdApple");
// arr.shift();
// console.log(arr);

// Q8
// let arr = [
//   "guava",
//   "mango",
//   "orange",
//   "pineapple",
//   "strawberry",
//   "custurdApple",
// ];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Q9
// setTimeout(function () {
//   console.log("Times Up!");
// }, 2000);

// Q10  //it is higher order function
// function runTwice(fn) {
//   fn();
//   fn();
// }
// runTwice(function () {
//   console.log("hello");
// });

// Q11  //pure and Impure Function
// pure function
// function mul(a) {
//   return a * a;
// }
// console.log(mul(5));
// console.log(mul(5));

// Impure function
// let count = 1;
// function increase() {
//   count++;
//   return count;
// }
// console.log(increase());
// console.log(increase());
// console.log(increase());

// Q12  // object destructuring using function parameter
// function obj({ name = "Nayan", age = 21 }) {
//   console.log("name:", name);
//   console.log("age:", age);
// }
// obj({ name: "nayan", age: 20 });

// Q13
// normal function
// function normal() {
//   console.log("normal function");
// }
// normal();

// fat Arrow/Arrow function
// let fn = () => {
//   console.log("arrow function");
// };
// fn();

// Q14
// in map new arr created no changes in original array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr.map((val) => {
//   return val * val;
// });
// console.log(arr2);
// console.log(arr);

// Q15
// in filter new arr created no changes in original array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr.filter(function (val) {
//   if (val % 2 === 0) {
//     return val;
//   }
// });
// console.log(arr2);
// console.log(arr);

// Q16
// in reduce single value returns no changes in original array
// let arr = [1000, 2000, 3000, 4000];
// let arr2 = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// console.log(arr2);
// console.log(arr);

// Q17
// isme ek bhi condition satisfy kare to true and return
// let names = ["sarthak", "satwik", "harsh", "Ali", "dhanesh", "ritwik"];
// let foundedName = names.some((val) => val === "sarthak");
// console.log(foundedName);

// Q18
// isme ek bhi condition false kare to return false and out
// let names = ["sarthak", "satwik", "harsh", "Ali", "dhanesh", "ritwik"];
// let foundedName = names.every((val) => val.length >= 3);
// console.log(foundedName);

// Q19
// obj.freeze()
// let user = { name: "Yash", category: "OBC" };
// Object.freeze(user);

// user.name = "Bhushan";  // no changing allowed
// console.log(user);

// obj.seal()
// let user = { name: "Yash", category: "OBC" };
// Object.seal(user);

// user.name = "Bhushan"; //  changing allowed
// user.age = 21; //not allowed neww property
// console.log(user);

// Q20
// const user = {
//   name: "Nayan",
//   age: 21,
//   address: {
//     street: "godhani Road",
//     city: "Nagpur",
//     zip: 440001,
//   },
// };

// console.log(user.address.street);

// ............. Chat GPT Questions ...................
// Q1 Print numbers from 1 to 10 using a loop.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// Q2 Print the multiplication table of 7.
// let num = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

// Q3 Count how many vowels are in "javascript".
// it is little bit complicated for me
// let str = "javascript";
// let vovels = ["a", "e", "i", "o", "u"];
// let countVovels = str
//   .toLowerCase()
//   .split("")
//   .filter((words) => vovels.includes(words)).length;
// console.log(countVovels);

// Q4 Find the sum of numbers in array [5, 10, 15, 20].
// let arr = [5, 10, 15, 20];
// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(sum);

// Q5 Check if a number is even or odd.
// for (let i = 0; i < 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(`it is odd`, i);
//   } else {
//     console.log(`it is even`, i);
//   }
// }

// Q6 Write a function that takes a name and prints:
// "Hello, <name>! Welcome to JavaScript!"

// function gretting(name = "Dhiru") {
//   console.log(`Hello ${name}! Welcome to JavaScript!`);
// }
// gretting("Nayan");

// Q7 Reverse the string "hello".
// let str = "hello";
// let Reversed = str.split("").reverse().join("");
// console.log(Reversed);

// Q8 Find the largest number in [12, 45, 7, 89, 23].
// let arr = [12, 45, 7, 89, 23];
// let largest = Math.max(...arr);
// console.log(largest);

// Q9 Return only even numbers from [1, 2, 3, 4, 5, 6].
// let nums = [1, 2, 3, 4, 5, 6];
// let even = nums.filter((val) => val % 2 === 0);
// console.log(even);

// Q10 Check if a word is a palindrome ("madam" → true).
// let word = "madam";
// let palindrome = word.split("").reverse().join("");
// if (word === palindrome) console.log(`it is palindrome`);

// .............. Phase 2 Intermediate Level ..............

// Q1
// function createCounter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },
//     decrement() {
//       count--;
//       console.log(count);
//     },
//   };
// }
// let counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();

// Q2
// const numbers = [2, 4, 6, 8, 10];
// let doubled = numbers.map((val) => {
//   return val * val;
// });
// console.log(doubled);

// Q3 From [12, 25, 18, 40, 55], use .filter() to return numbers greater than 20.
// let arr = [12, 25, 18, 40, 55];
// let greterNum = arr.filter((val) => {
//   if (val > 20) {
//     return val;
//   }
// });
// console.log(greterNum);

// Q4 Use .reduce() to find the product (multiply all numbers) in [2, 3, 4, 5].
// let arr = [2, 3, 4, 5];
// let reducedVal = arr.reduce((acc, val) => {
//   return acc * val;
// }, 1);
// console.log(reducedVal);

// Q5 Create an object user with name and age.
// let user = {
//   name: "aryan",
//   age: 16,
// };
// function changed({ name = "Nayan", age = 21 }) {
//   console.log((user.name = name));
//   console.log((user.age = age));
// }
// changed(user.name,user.age);

// Q6 Use Object.freeze() on a settings object.
// Try to modify one property after freezing — what happens?

// let user = {
//   name: "aryan",
//   age: 16,
// };
// Object.freeze(user);
// user.name = "Nayan"; //it will not gone change..
// console.log(user);

// in this after using object.freeze we cannot change inner objects value, insert external value and not delete any value because user object got freeze ...

// Q7 Create a function runTwice(fn) which takes another function and executes it two times.

// function runTwice(fn){
//   fn();
//   fn();
// }
// runTwice(function(){
//   console.log('hello javascript')
// })

// Q8  Execution & Scope
//  What will be the output?
// let a = 10;
// function test() {
//   console.log(a);
//   let a = 5;
// }
// test();

// fisrtly a = 10 is in globle scope so it can access anywhere in code ..
// second thing is we console.log(a) inside function scope and in function a = 5 local variable also present so javascript knows that we console a but a = 5 is after console.log written thats why this will show reference error cannot access a before initialization because of temporal dead zone .

// Q9 Given [12, 14, 18, 20], use .every() to check if all numbers are even.
// Then use .some() to check if at least one number is odd.
// let arr = [12, 14, 18, 20];
// let arr2 = arr.every((val) => {
//   if (val % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(arr2);

// let arr = [12, 14, 18, 20];
// let arr2 = arr.some((val) => {
//   if (val % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(arr2);

// Q10 Write a function that counts how many times the letter "a" appears in "banana".

// this is little bit complex for me

// function countA(str) {
//   let count = str.split("").filter(ch => ch === "a").length;
//   console.log(count);
// }

// countA("banana");

// ........................................................
// ................ OPPS Concepts ......................
// Q1 Create a user object that stores name and email and has a login method which prints “User logged in”.

// const user = {
//   name: "nayan",
//   email: "nayanbhusari02@gmail.com",
//   login: function () {
//     console.log("user logged in");
//   },
// };
// user.login();

// Q2 Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// let user1 = {
//   name: "Akarsh",
// };
// let user2 = {
//   name: "Akarsh",
// };
// let user3 = {
//   name: "Akarsh",
// };
// let user4 = {
//   name: "Akarsh",
// };
// let user5 = {
//   name: "Arsh",
// };
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// class User {
//   constructor(name, email, age) {
//     (this.name = name), (this.email = email), (this.age = age);
//   }
// }
// let u1 = new User("nayan", "nayanbhusari02@gmail.com", 21);
// let u2 = new User("nayan", "b@b.bcom", 20);
// let u3 = new User("nayan", "c@c.ccom", 19);
// let u4 = new User("nayan", "d@c.dcom", 22);
// let u5 = new User("nayan", "e@c.ecom", 23);

// Q3 Create a product object that stores name and price and has a method which returns the final price after discount.
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.finalPrice = function (discount) {
//       return this.price - discount;
//     };
//   }
// }
// let p1 = new Product("pepsi", 20);
// console.log(p1.finalPrice(5));

// Q4 Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

// Q5 Create two different car objects from the same class and verify that their data is different.
// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   drive() {
//     console.log(`${this.brand} - ${this.speed}`);
//   }
// }
// let car1 = new Car("BMW", 210);
// let car2 = new Car("Audi", 240);
// car1.drive();
// car2.drive();

// Q6 Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student {
//   constructor(name, rollNo) {
//     this.name = name;
//     this.rollNo = rollNo;
//   }
//   introduce() {
//     console.log(this.name + " - " + this.rollNo);
//   }
// }
// let std1 = new Student("Harshit", 201);
// std1.introduce();

// Q7
// let Obj = {
//   normal: function () {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   },
// };
// Obj.normal();
// Obj.arrow();

// 10.	Create a User constructor function (do not use class syntax).
// function User() {
//   (this.name = "nayan"), (this.age = 21);
// }
// let user1 = new User();
// console.log(user1);

// Q11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// class Student {
//   constructor() {
//     this.name = "Nayan";
//     this.age = 21;
//     this.login = function () {
//       console.log("login inside");
//     };
//   }
//   // login() {
//   //   console.log("login outside");
//   // }
// }
// let s1 = new Student();

// Q12 Create two User objects and compare their login methods using equality. Explain why the result is true or false.

// class User {
//   constructor(name) {
//     this.name = name;
//     this.login = function () {
//       console.log("User logged in");
//     };
//   }
// }

// let U1 = new User("A");
// let U2 = new User("B");

// console.log(U1.login === U2.login);

// 13.	Create a function that prints this.name.
// function user() {
//   console.log(this.name);
// }
// user();
// Output will be "" blank string..

// 	14.	Create an object that contains a name property.
// function user(a, b, c) {
//   console.log(this.name, a, b, c);
// }
// let obj = {
//   name: "nayan",
// };

// user.apply(obj, [1, 2, 3]); //output "nayan,1,2,3"
// user.call(obj);  //output "nayan"
// let b1 = user.bind(obj, 1, 2, 3);
// b1();

// ........................................................
// callack and callack Hell
// function abcd(fn) {
//   fn(function (fn2) {
//     fn2(function (fn4) {
//       fn4(function (fn6) {
//         fn6();
//       });
//     });
//   });
// }
// abcd(function (fn1) {
//   fn1(function (fn3) {
//     fn3(function (fn5) {
//       fn5(function(){
//         console.log("callback at fn5 and exept at fn6")
//       });
//     });
//   });
// });

// .......................................................
// .................. Exercise 1 ........................
// Q1
// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }
// afterDelay(3000, function () {
//   console.log("callback Excecuted");
// });

// Q2
// function getUser(username, cb) {
//   setTimeout(() => {
//     cb({ id: 1, username: username });
//   }, 1000);
// }
// function getUserPosts(uniqueNum, cb) {
//   setTimeout(() => {
//     cb(["img1", "img2"]);
//   }, 2000);
// }
// getUser("Nayan", function (data) {
//   getUserPosts(data.id, function (allposts) {
//     console.log(allposts);
//   });
// });

// .............. ChatGPT Questions .......................

// function login(email, password, cb) {
//   setTimeout(() => {
//     cb({ id: 1, email, password });
//   }, 2000);
// }

// function getProfile(userId, cb) {
//   setTimeout(() => {
//     cb({ id: userId, name: "Nayan", age: 21 });
//   }, 2000);
// }

// function getFriends(userId, cb) {
//   setTimeout(() => {
//     cb(["Aryan", "Naman", "ritanshi"]);
//   }, 2000);
// }

// login("nayan@test.com", "1234", function (user) {
//   getProfile(user.id, function (profile) {
//     getFriends(profile.id, function (friends) {
//       console.log("Your Friends:", friends);
//     });
//   });
// });

// ............ weather api calling ................

// async function weatherData(city) {
//   try {
//     let apiKey = "741db4dab27fe51c6534364e6f171b8a";
//     let rawData =
//       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
// `);

//     if (!rawData.ok) {
//       throw new Error("city is invalid try another city..");
//     }
//     let realData = await rawData.json();
//     console.log(`${realData.main.temp}°C`);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// weatherData("nagpur");

