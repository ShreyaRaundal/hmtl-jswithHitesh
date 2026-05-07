let balance = 202;
let anotherbalance = new Number(120);

console.log(typeof balance.valueOf());
console.log(typeof anotherbalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true);

// null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

// string

let myString = "hello";
let myStringOne = "helloworld";
let username = "hitesh";

let oldGreat = myString + "hitesh";
console.log(oldGreat);

let greatMessage = "Hello ${username}!";
let DemoOne = `Value is ${2 * 2}`;
console.log(greatMessage);

console.log(DemoOne);

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1);
console.log(sm2);
