//part A (1)
function test() {
    x = 10;
}
test();
console.log(x);
//what happend ? output will be 10 due to x is gobal 

//(2)
function test() {
    "use strict";
    try {
        x = 10;
    } catch (error) {
        console.log(error.message);
    }
}
test();

//(3)
function test() {
    "use strict";
    var localVar = "test";
    try {
        delete localVar;
    } catch (error) {
        console.log(error.message);
    }
    let student = {
        name: "Ali"
    };
    delete student.name;
    console.log(student);
}
test();

//part B (4) output is 
// undefined 
//10 ,reason is var is hosting , decleration move up but x=10 not

//(5) case 1 : output is Hi ,reason is function decleration make complete hosting 

//case 2 :TypeError , reason is sayBye make for it hosting as var
//  but function value is not put yet 

//(6) output is ReferenceError ,
// reason is let will be in the TDZ (Temporal Dead Zone) from the beginning of the block until we reach its declaration line.

//(7) output is undefined
//2
//1
// reason is inside 'var n=2 ' make hosting 

//part C (8) 
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
test();

//(9)
function test() {
    if (true) {
        let x = 10;
        const y = 20;
    }
    console.log(x);
    console.log(y);
}
test();

//(10)
var x = 10;
var x = 20;  // var allow redecleration
console.log(x);
// output :20
// another example :
let y = 10;
// let y = 20;  // Error


//(11)
const student = {
    name: "Ali",
    age: 20,
    city: "Cairo"
};
student.age = 21;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
try {
    student = {
        name: "Mona"
    };
} catch (error) {
    console.log(error.message);
}


//(12)
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums[0] = 10;
console.log(nums);
try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}
// Allowed :[1, 2, 3, 4]
// Not allowed : [10, 2, 3, 4] , resetting the array itself is not allowed.

//(13)
var a; // valid
let b; // valid
const c;// Error

//(14)
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1);
console.log(window.g2);
console.log(window.g3);
// in console will appear : var global
//undefined
//undefined

//(15)
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());
// explain : let assigns a different value to i in each loop iteration,
//  the opposite of var.

//part D (16)
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Ali"));

//(17)
const fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;
console.log(fullInfo("Natalie", "Ramy", 21));

//(18)
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));


const sum = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
};
console.log(sum(2, 3));


// part E (19)
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);
//output is Laptop
//15000
//true

//(20)
const arr = ["HTML", "CSS", "JS", "React"];
const [first, second] = arr;
console.log(first);
console.log(second);

//(21)
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Ali", "Hi"));
console.log(greet("Mona"));
console.log(greet());

//(22)
function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

//(23)
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);

//copy :
const nums = [10, 20, 30];
const copy = [...nums];
copy.push(40);
console.log(nums);
console.log(copy);

//(24)
const user = {
    name: "Sara",
    age: 22
};
const contact = {
    email: "sara@nti.com",
    age: 23
};
const result = {
    ...user,
    ...contact
};
console.log(result);
// 23 age wins , due to Because contact comes after user,
//  the last value is the one that wins.

//(25)
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));

//part F (26)
//output is Omar, reason is Person2 and Person1 are pointing 
// to the same object in memory.

//(27)
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const copy = {
    ...original
};
copy.name = "Sara";
copy.details.city = "Alex";
console.log(original);
console.log(copy);
//change :The name changed in copy only, but details.city changed in both.
//reason :The spread here is a shallow copy, 
// meaning the nested object is still shared between them.

//(28)
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const copy = structuredClone(original);
copy.details.city = "Alex";
console.log(original);
console.log(copy);
// output :{
 //   name: "Mona",
 //   details: {
 //       city: "Cairo"
//    }
//}

// output :{
   // name: "Mona",
   // details: {
     //   city: "Alex"
  //  }
//}
//The original hasn't changed because structuredClone made a deep copy.

//(29)
const user = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(user));
const data = localStorage.getItem("userdata");
const parsedData = JSON.parse(data);
console.log(typeof parsedData);
console.log(parsedData);
localStorage.removeItem("userdata");

//part G (30)
const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://example.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("login");
console.log(APP_CONFIG);
try {
    APP_CONFIG = {};
} catch (error) {
    console.log(error.message);
}

//(31)
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}
const card1 = createCard("Laptop", 15000, "Dell", "Tech");
const card2 = createCard("Phone", 10000, "Samsung");
console.log(card1);
console.log(card2);

//(32)
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}