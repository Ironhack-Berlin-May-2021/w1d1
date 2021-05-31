console.log('hello planet');

// this is a single line comment

/*
this is a multiline comment
*/

// variables - named storage

// declaring variable
let client;

// console.log(client); -> undefined

// at the same line
// let cat, mouse;
let cat;
// assigning a value
cat = 'Tom';

// declaring and initializing (giving it the initial value) a variable
let mouse = 'Jerry';
console.log(cat);

// there are other functions aside .log()
// console.error('this is an error');

// naming - no abreviations, think twice about exact descriptions

// some names are not allowed
// let 23n; ❌
// the first character must be letter, underscore, dollar sign

// you cannot use reserved keywords

// use camelCase
let userPassword;
console.clear();

// variables declared with let can be reassigned 
let user = 'Ahmed';
user = 'Katka';
console.log(user)

// variables declared with const cannot
// use const whenever possible

// Data types

// There are two types of data types in JavaScript:
// Objects and Primitives 
// 6 primitive types: number, string, boolean, null, undefined, symbol

// you can check the type of a variable
// js is dynamically typed - the type get's determined at runtime
console.clear();
user = 23;
console.log('the type of user is: ', typeof user);
// console.log(typeof user);


console.clear();
// Numbers

// can be integers and floating point numbers
const distance = 70000;
const price = 19.99;

console.log(typeof distance);

// NaN is a computional error
console.log('hello' * 3); // -> NaN -> Not a Number

console.clear();
// Math operators
const sum = 2 + 3; // adition
console.log(sum)
// 1 - 0 -> subtraction
// 6 / 2 -> division
// 4 * 5 -> mulitplication

// Modulo -> remainder
console.log(4 % 2); // 4 divided by 2 - that is 2 and the remainder is 0
console.log(5 % 2);

// exponentiation
console.log(3 ** 2)
console.clear();
let x = 5;
// x = x + 1;
x += 3; // x = x + 1
console.log(x)

// x -= 5 -> x = x - 5; 
// x *= 5
// x /= 5

console.clear();

let i = 0;
i += 1;
i += 1;
i++; // i = i + 1
i--; // i = i - 1
console.log(i)


// some bonus info
let j = 1;
console.log(++j);
console.log(j);

console.clear();

// Strings - a sequence of characters
const emptyString = '';

const greeting = 'hello';
let name = 'Ahmed';
name = "Katka";
name = `Jan`;
console.log(name);

// concatenation of strings 
// const message = greeting + ' ' + 'Jan';
// const message = greeting + name;
// use ${} to interpolate within backticks
const message = `Hi ${name}`
console.log(message);

// \n - escaped n to put the words in a line 
// const list = 'coffee \n apples \n club mate'
const list = `cocacola 
apples 
mate`
console.log(list)

const word = 'Hello';

// access characters in the string
console.log(word.charAt(0));

// bracket notation
console.log(word[0]);

// use slice() to get parts of the string (startIndex, endIndex exclusive)
const firstWord = list.slice(0, 8);
// starts at 0 and takes all the rest
console.log('sliced word: ', word.slice(2));


// indexOf()
// find out the index of a specific character -> returns the index
// of the first occurence of that character or - 1 if the character is not
// in there
console.log(word.indexOf('l'))

// lastIndexOf()
console.log(word.lastIndexOf('l'))

console.log(firstWord);

// console.clear();
const firstName = 'John';
const lastName = 'Doe';
// const initials = firstName[0] + '.' + ' ' + lastName[0] + '.';
const initials = `${firstName[0]}. ${lastName[0]}.`
console.log(initials) // -> 'J. D.'

// console.clear();
const someWord = 'FooBar';
// get the last character using the length property of the string
// which returns the length
console.log(someWord.length)
// access the last index
console.log(someWord[someWord.length - 1])

console.clear();

// turn string to uppercase
// strings like all other primitives are immutable - they cannot
// change - to change userName you have to reassign it
let userName = 'alice';
// userName = userName.toUpperCase();
console.log(userName.toUpperCase());
console.log(userName);

// create this string: Alice
// get the first char, turn it to uppercase, concatenate the rest of the string
const upperCased = userName[0].toUpperCase() + userName.slice(1);
console.log(upperCased)
console.clear();
// Booleans - undefined and null

// undefined represents the unintentional absence of a value
// null represents the intentional absence of a value

// boolean expression evaluates either to true of false
// > larger than
// >= larger than or equal
const num1 = 3;
const num2 = '3';
// comparing values for equality
// this is strictly equal -> false
console.log(num1 === num2)
// this is equal -> true - the string is converted to a number
// before comparison
console.log(num1 == num2)
// not operator
// check if num1 is not equal to num2
console.log(num1 !== num2);
console.log(num1 != num2);

console.log(!true)


// falsy values: '', 0, null, undefined, NaN   

const password = null;
if (password) {
    console.log('the password is set')
}


// boolean operators && - the logical 'and'  and || - the logical 'or'
if (3 < 5 || 5 > 6) {
    console.log('this is true')
}


const age = 12;

if (age >= 18) {
    console.log('you can drive in germany');
} else if (age === 17) {
    console.log('you can drive with a parent in germany');
} else {
    console.log('you are too young to drive');
}

console.clear();

// const language = prompt('what is your mother tongue?');
// switch (language) {
//     case 'french':
//         console.log('bonjour');
//         break;
//     case 'english':
//         console.log('hello');
//         break;
//     case 'german':
//         console.log('guten tag');
//         break;
//     default:
//         console.log('non recognized language');
// }

// Iterations - loops

// for loop

// logging numbers 1 to 10

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// while loop
// exactly the same logic
let counter = 1;
while (counter < 11) {
    console.log(counter);
    counter++
}
console.clear();

let input;
while (input !== '123') {
    input = prompt('enter password')
}
// when we reach this line line 279 is false -> the password 
// is correct
alert('access granted 🔑');