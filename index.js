"use strict";
console.log('Hello World');
var Greetings;
(function (Greetings) {
    Greetings[Greetings["Hi"] = 0] = "Hi";
    Greetings[Greetings["Hello"] = 1] = "Hello";
})(Greetings || (Greetings = {}));
let variable = undefined;
function sayHello(variable) {
    return 'Hello, ' + variable + '!!';
}
let greeting = sayHello(variable);
console.log(greeting);
