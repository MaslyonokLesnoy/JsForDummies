//alert('Hello, alert!');
console.log('Hello console!');

// Single line comment
/*
Multiline  comment
*/

// variables

var firstname;
var _lastname;
var $patronymic;

var camelCase;
var bottleOfWater;

// do not use transliterate butylkavody

// Five primitive types (scalar):
var num = 5;
var float = 5.5;

// num and float both have a type 'number'
console.log(typeof num);
console.log(typeof float);



// string
var str1 = 'Hello, string variable!';
var str2 = "Hello, string variable!";
console.log(str1);
console.log(str2);

var str3 = 'Hello, string variable in "quotes!"';
var str4 = "Hello, string variable in 'quotes!'";
var str5 = "Hello, string variable in \"quotes!\"";

console.log(str3);
console.log(str4);
console.log(str5);


var bool = true;
var lie = false;

console.log(0 > 2);
console.log(0< 2);

var und; // undefinded
var donutHole = null;

// Get type of variable
console.log(num);
console.log(typeof bool);

// Structural object types

// object is a collection of any data type
var obj = {
    a: 5,
    b: 'string in object collection',
    c: false,
    d: {
        e: 10,
        f: 15
    },
    z: [1, 2, 3, 4]
};

console.log(obj.b);
obj.b = 'changed string in object collection';
console.log(obj.b);

console.log(obj.z);
obj.z = 'array is stolen';
console.log(obj.b);

console.log(obj['c']);

// add new property
// if property written with spaces this can access only by key
obj['new property'] = 'new value';


// show object
console.log(obj);


// array
// keys are numbers
// keys fill automaticaly
// array can contain membeors of any type
var arr = [1, 2, 'string in array', true, {a: 1, b: 2}, ['a', 'b']];

console.log('show array: ' + arr);

console.log('show member 1 of array: ' + arr[0]);
console.log('show member 2 of array: ' + arr[1]);
console.log('show member 3 of array: ' + arr[2]);
console.log('show member 4 of array: ' + arr[3]);
console.log('show member 5 of array: ' + arr[4]);
console.log('show member 6 of array: ' + arr[5]);
console.log('show member 7 of array: ' + arr[6]);




var func = function(){};

var regExp = /w+/g;
var error = Error('error message');
var date = new Date();



