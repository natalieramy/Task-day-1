console.log("JS is running successfully"); 

alert("Ready to practice !");

var productName ="Laptop";
var price=15000;
var isAvailable= true;
console.log(productName,typeof productName);
console.log(price,typeof price);
console.log(isAvailable,typeof isAvailable);

let title =document.getElementById("mainTitle");
title.innerText = "Time Practice";

var city="Cairo";
var country ="Egypt";
console.log(country+","+city);
console.log(`Location: ${city}-${country}`);

itemprice=120;
quality=3;
console.log(itemprice+quality);
console.log(400-itemprice);
console.log(itemprice*quality);
console.log(itemprice/quality);
console.log(itemprice%quality);
console.log(2**quality);

var color =prompt("Enter your favorite color ?");
console.log("Your Favourite color is :"+color);

var score =20;
var textScore ="20";
console.log(score==textScore); //result is true because 2 = is not equal in value
console.log(score===textScore); //result is false because 3 = is  equal in value

var quantity =prompt("Enter quantity");
var number1 =Number(quantity);
console.log(typeof number1);
var number2 =parseInt(quantity);
console.log(typeof number2);
var number3 = +quantity;
console.log(typeof number2);


var fruits = ["apple","banna","mango"];
console.log(fruits[1]); //due to first index number = 0
fruits[1]="orange";
fruits.push("grape");
console.log(fruits);

var course = {
    title:"js",
    hours:3,
    level:"Beginner"
};
course.title="Java";
console.log(course.hours);
console.log(course);

var hasAccount=true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

var balance=50;
balance +=30;
balance *=2;
balance -=20;
console.log(balance);

var Hotel=prompt("Enter Hotel name ?");
var Nights=prompt("Enter number of nights ?");
var confirmed =confirm("Booking confirmed?");
var message=`HOTEL:${Hotel},NIGHTS:${Nights}, CONFIRMED:${confirmed}`;
alert(message);
console.log(message);

console.log(2+8+"0"); //result : 100
console.log("2"+8+0); //result : 280
console.log(2+"8"+0); //result : 280

var city1="Alex"; 
var city2=city1; 
city2 ="Giza"; //لما غيرت city1 , city2 متغيرتش لانها نسخة لوحدها
console.log(city1,city2);

var car1 ={brand:"Toyota"};
var car2 =car1;
car2.brand ="Honda";
console.log(car1,car2);

var car1 = {brand:"Toyota"};
var car2 = Object.assign({},car1);
car2.brand="Honda";
console.log(car1);
console.log(car2);

var mixedBag =[
    "Hello",
    10,
    true,
    null,
    undefined,{
        name:"Ali"
    },[1,2,3]
];
//typeof null = object

var customer =prompt("customer name");
var price =Number(prompt("Price"));
var paid = confirm ("paid ?");
var message=`customer :${customer},price:${price},paid:${paid}`;
console.log(message);
alert(message);
document.getElementById("result").innerText=message;

var num1 =Number(prompt("First Nunber"));
var num2 =Number(prompt("Second Number"));
console.log(`${num1}+${num2} = ${num1+num2}`);
console.log(`${num1}-${num2} = ${num1-num2}`);
console.log(`${num1}*${num2} = ${num1*num2}`);
console.log(`${num1}/${num2} = ${num1/num2}`);
console.log(`${num1}%${num2} = ${num1%num2}`);
console.log(`${num1}**${num2} = ${num1**num2}`);

var a=40;
var b=50;
var c="60";
var d=30;
var e=30;
console.log(a+b+c+d+e); // resulte :90603030
console.log(a+b+Number(c)+d+e);


function makeInvoiceLine(item,qty,paid){
    return "Invoice => Item :"+"|qty:"+qty+"|Paid :"+paid;
}
var item=prompt(
    "enter product name");
    var qty =prompt("enter quantity ?");
    var paid =confirm("confirmed?");
    var result = makeInvoiceLine(item,qty,paid);
    document.write(result);


function saveUsername(){
    var inputVal = document.getElementById("username").value ;
    var resultDiv = document.getElementById("result");
    if(inputVal===""){
        resultDiv.innerText="Username is required";
        resultDiv.innerText="Saved successfully"+ inputVal;

    }
    console.log({
        username:inputVal,
        status:"saved"
    });


}


var a ="15";
var b =15;
var c =null;
var d ;
var e =[15];
var f ={value:15};
console.log(a,"|", typeof a,"|", a==15, a==15);
console.log(b,"|", typeof b,"|", b==15, b==15);
console.log(c,"|", typeof c,"|", c==15, c==15);
console.log(d,"|", typeof d,"|", d==15, d==15);
console.log(e,"|", typeof e,"|", e==15, e==15);
console.log(f,"|", typeof f,"|", f==15, f==15);



var productName = prompt("enter product name :");
var brand = prompt("brand name :");
var price = prompt("price:");
var category = prompt("ente category:");
var inStock = confirm ("Is this product in stock?");
var price =Number(priceInput);
var productInfo={
    productName:productName,
    brand :brand,
    price :price,
    category : category,
    inStock:inStock};
var message = `Product: ${productName} | Brand: ${brand} | Price: $${price} | Category: ${category} | In Stock: ${inStock}`;
console.log(productInfo);
alert(message);
document.getElementById("result").innerText=message;
console.log("first letter:",productName[0]);








