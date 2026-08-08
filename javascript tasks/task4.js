//task js crud without DOM
let items = [];
function addItem(newItem) {
  items.push(newItem);
  console.log("Added:" + newItem);
}
function showItems() {
  console.log("List of items:");
  items.forEach(function(item, index) {
    console.log(index + ": " + item);
  });
}
function updateItem(index, newValue) {
  items[index] = newValue;
  console.log("Updated item " + index + " to: " + newValue);
}
function deleteItem(index) {
  items.splice(index, 1);
  console.log("Deleted item " + index);
}
addItem("Apple");
addItem("Banana");
addItem("Orange");

showItems();
updateItem(1, "Mango");
deleteItem(0);
showItems();

//task 1 functions and callback functions
function multiply(num1, num2) {
    return num1 * num2;
}
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
function displayResult(result) {
    console.log(result);
}
var result = calculate(5, 3, multiply);
displayResult(result);



// Task 2 Working with setTimeout and setInterval 
function greetUser() {
    setTimeout(function() {
        console.log("Hello, User!");
    }, 3000);
}

greetUser();

function countdown() {
    var number = 10;

    var interval = setInterval(function() {
        console.log(number);
        number--;

        if (number === 0) {
            console.log("Time's up!");
            clearInterval(interval);
        }
    }, 1000);
}
countdown();



function countdownFiveSeconds() {
    var number = 10;

    var interval = setInterval(function() {
        console.log(number);
        number--;
    }, 1000);

    setTimeout(function() {
        clearInterval(interval);
        console.log("Interval stopped!");
    }, 5000);
}
countdownFiveSeconds();



var message = setTimeout(function() {
    console.log("This will be cleared!");
}, 5000);
clearTimeout(message);