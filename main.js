//task1 in sheet1
var name="natalie";
var age=21;
var isadult=true;
var city=null;
var country=undefined;
console.log(name);
console.log(age);
console.log(isadult);
console.log(city);
console.log(country);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isadult);
console.log(typeof city);
console.log(typeof country);

var firstname="natalie";
var lastname="ramy";
console.log(firstname+" "+lastname);
console.log(`${firstname}${lastname}`);

//task2 in sheet 1
var username=prompt("enter your username");
var password=prompt("enter your password");

if(username==""){
    alert(" Username is required");
}
else if(password.length<8){
    alert("Password must be at least 8 characters");
}
else{
    console.log("Username :"+username);
    console.log("password:"+password);
}

//sheet2
var name=prompt("enter your name");
var age=prompt("enter your age");
var yearsofexperience=Number(prompt("enter your years of experience"));
var salary=Number(prompt("enter your salary"));
var rating=Number(prompt("rate yourself from 1 to 10"));
var category;
if(yearsofexperience<2){
    category="junior";
}else if(yearsofexperience>=2 && yearsofexperience<=5){
    category="mid-level";
}else if(yearsofexperience<=10){
    category="senior";
}else{
    category="expert";
}

var performance;
switch(rating){
    case 9:
    case 10:
        performance="Excellent";
        break;
    case 7:
    case 8:
        performance="Good";
        break;
    case 5:
    case 6:
        performance="Average";
        break;
    default:
        performance="needs improvement";
}
var bonus=0;
if(yearsofexperience<=2){
    bonus=salary*0.10;
}else if(yearsofexperience<=5){
    bonus=salary*0.15;
}else{
    bonus=salary*0.20;
}
var finalsalary=salary+bonus;
var hour =new Date().getHours();

var shift;
if(hour>=9 && hour<18){
    shift="day shift";
}else{
    shift="night shift";
}
console.log("name:"+name);
console.log("age:"+age);
console.log("category:"+category);
console.log("performance:"+performance);
console.log("final salary:"+finalsalary);
console.log("shift:"+shift);
alert("employee name:"+name+"\ncategory:"+category+"\nperformance:"+
    performance+"\nfinal salary:"+finalsalary+"\nshift:"+shift);
document.getElementById("result").innerHTML = `
    <h2>Employee Report</h2>
    <p>name:${name}</p>
    <p>Age:${age}</p>
    <p>Category:${category}</p>
    <p>Performance:${performance}</p>
    <p>Final Salary:${finalsalary}</p>
    <p>Shift:${shift}</p>
`;

//sheet3 day 2 tasks
for(var i=1;i<=10;i++){
    console.log(i);
}

for(var i=2;i<=20;i+=2){
    console.log(i);
}

var totalsales=0;
for(var i=1;i<=15;i++){
    totalsales=totalsales+i;
}
console.log("total sales = " , totalsales);


var ticket=1;
while(ticket<=7){
    console.log(ticket);
    ticket++;
}

var count=8;
while(count>=1){
    console.log(count);
    count--;
}

var i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

var itemincart=0;
while(itemincart>0){
    console.log("empty");
}
do{
    console.log("item in cart")
}while(itemincart>0);


var username="natalie";
var userage=22;
var isstudent=true;
console.log(username,typeof username);
console.log(userage,typeof userage);
console.log(isstudent,typeof isstudent);

var dbprice=10;
var inputprice="10";
console.log(dbprice==inputprice);
console.log(dbprice===inputprice);



var username=prompt("enter your username");
var message=`welome,${username}`;
alert(message);
console.log(message);


var input=prompt("enter number");
var num1=Number(input);
console.log(num1,typeof num1);
var num2=parseInt(input);
var num3=+input;
console.log(num3,typeof num3);


var a=50;
var b=30;
console.log("sum:", a + b);       
console.log("subtraction:", a - b);      
console.log("division:", a / b);      
console.log("remainder:", a % b);
console.log("power:", b ** a);      

var age = 20;

if (age >= 18) {
  console.log("You can enter");
} else {
  console.log("Sorry, underage");
}


var grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}


var age = Number(prompt("enter your age:"));
var result = age >= 18 ? "Adult" : "Minor";
console.log(result);

var day = prompt("Enter the day of the week:");

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
  case "Friday":
    console.log("Workday / Friday");
    break;
  default:
    console.log("Workday");
    break;
}


var unitPrice=Number(prompt("enter the unit price:"));
for (var i = 1; i <= 10; i++) {
  console.log(`${i} x ${unitPrice} = ${i * unitPrice}`);
}


var fileSize = Number(prompt("Enter the file size:"));

if (fileSize > 0) {
  for (var i = 1; i <= fileSize; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid file size");
}


var start = Number(prompt("enter the starting number:"));
var end = Number(prompt("enter the ending number:"));
for (var i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(`${i} express`);
  } else {
    console.log(`${i} normal`);
  }
}


var students = ["Ahmed", "Sara", "Ali", "Mona"];
for (var i = 0; i < students.length; i++) {
  console.log(`Student ${i + 1}: ${students[i]}`);
}


var total = 0;

for (var i = 1; i <= 5; i++) {
  var expense = Number(prompt(`enter the expense for day ${i}:`));
  total = total + expense;
}
var average = total / 5;
console.log("Total:", total);
console.log("Average:", average);





var correctPin = "1234";
var attempts = 0;
var isSuccess = false;
while (attempts < 3) {
  var enteredPin = prompt("enter the PIN:");
  attempts++;

  if (enteredPin === correctPin) {
    isSuccess = true;
    break; 
}
if (isSuccess) {
  console.log("successful login");
} else {
  console.log("failed login");
}
}




var hasAccount = true;
var isVerified = false;
console.log("hasAccount && isVerified:", hasAccount && isVerified); 
console.log("hasAccount || isVerified:", hasAccount || isVerified); 
console.log("!hasAccount:", !hasAccount);                           
if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount && !isVerified) {
  console.log("Please verify your account.");
} else {
  console.log("Please sign up");
}




var a = 40;
var b = 50;
var c = "60"; 
var d = 30;
var e = 30;
var total = a + b + Number(c) + d + e; 
console.log("total:", total); 
if (total === 20) {
  for (var i = 1; i <= total; i++) {
    console.log(i);
  }
} else {
  console.log("Too big to print line by line");
}




var input = prompt("Enter a number to calculate its factorial:");
var n = Number(input);
if (n < 0) {
  alert("Invalid input. Please enter a non-negative integer.");
} else {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  var resultMessage = `${n}! = ${factorial}`;
  alert(resultMessage);
  console.log(resultMessage);

}

