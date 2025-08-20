/**
 * Implement Function.prototype.call() as Function.prototype.myCall
 *
 * The Function.prototype.call() method calls a function with a given `this` value
 * and arguments provided individually.
 *
 * Example:
 * function greet(greeting) {
 *   return `${greeting}, my name is ${this.name}`;
 * }
 * greet.myCall({ name: "Aman" }, "Hello"); // "Hello, my name is Aman"
 */

Function.prototype.myCall = function(callObj, ...params) {

    //if callObj doesnot exit then assign globalThis to callObj
    callObj = callObj || globalThis;

    // Create a temporary function on the callObj
    callObj.tempFunction = this;

    // Call the temporary function with the provided parameters
    const result = callObj.tempFunction(...params);

    // Clear the temporary function
    delete callObj.tempFunction;

    return result;
};

function multiplyAge (multiplier = 1){
    return this.age * multiplier;
}

const mary = {
    age:30
}

const john = {
    age:43
}

multiplyAge.mycall(mary, 2); // 60
multiplyAge.mycall(john) // 43