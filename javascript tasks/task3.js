//task1
var fullName = prompt("Enter your full name");
fullName = fullName.trim();
var words = fullName.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] =
        words[i].charAt(0).toUpperCase() +
        words[i].slice(1).toLowerCase();
}
var result = words.join(" ");
console.log(result);
var count = result.replaceAll(" ", "").length;
console.log("Characters = " + count);

//task2
var email = prompt("Enter your email");
if (
    email.includes("@") &&
    email.endsWith(".com") &&
    !email.startsWith("@") &&
    !email.includes(" ")
) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

//task3
var text = prompt("Enter text");
var letter = prompt("Enter character");
text = text.toLowerCase();
letter = letter.toLowerCase();
var count = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] == letter) {
        count++;
    }
}
console.log(count);

//task4
var sentence = prompt("Enter sentence");
var word = prompt("Enter word");
sentence = sentence.replaceAll(word, "***");
console.log(sentence);

//task5
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var username =
    firstName.trim().toLowerCase() +
    "." +
    lastName.trim().toLowerCase();
    if (username.length >15) {
        username= username.slice(0, 15);
    }
    console.log(username);

    //task6
var sentence = prompt("Enter sentence");
var word = prompt("Enter word"); 
console.log(sentence.includes(word));
console.log(sentence.indexOf(word));
console.log(sentence.lastIndexOf(word));
var count = 0;
var arr = sentence.split(" ");
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
        count++;
    }
}
console.log(count);

//task7
var sentence = prompt("Enter sentence");
var words = sentence.split(" ");
var result = "";
for (var i = 0; i < words.length; i++) {
    var reverse = "";
    for (var j = words[i].length - 1; j >= 0; j--) {
        reverse += words[i][j];
    }
    result += reverse + " ";
}
console.log(result);


//task8
var text = prompt("Enter text");
var words = text.trim().split(" ");
var characters = text.replaceAll(" ", "").length;
var vowels = 0;
var digits = 0;
var upper = 0;
var lower = 0;
for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if ("aeiouAEIOU".includes(ch))
        vowels++;
    if (ch >= "0" && ch <= "9")
        digits++;
    if (ch >= "A" && ch <= "Z")
        upper++;
    if (ch >= "a" && ch <= "z")
        lower++;
}
var longest = words[0];
var shortest = words[0];
for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length)
        longest = words[i];
    if (words[i].length < shortest.length)
        shortest = words[i];
}
console.log("Words = " + words.length);
console.log("Characters = " + characters);
console.log("Vowels = " + vowels);
console.log("Digits = " + digits);
console.log("Upper = " + upper);
console.log("Lower = " + lower);
console.log("Longest = " + longest);
console.log("Shortest = " + shortest);

//task9
var phone = prompt("Enter phone number");
var result = "";
for (var i = 0; i < phone.length; i++) {

    if (i < 4 || i >= phone.length - 3)
        result += phone[i];
    else
        result += "*";
}
console.log(result);

//task10
var sentence = prompt("Enter sentence");
sentence = sentence.trim();
while (sentence.includes("  ")) {
    sentence = sentence.replaceAll("  ", " ");
}
sentence = sentence.replaceAll("javascript", "JavaScript");
sentence =
    sentence.charAt(0).toUpperCase() +
    sentence.slice(1);
if (!sentence.endsWith(".")) {
    sentence += ".";
}
console.log(sentence);


//bouns task
var choice;
do {
    choice = prompt(
        "1- Upper\n" +
        "2- Lower\n" +
        "3- Count Characters\n" +
        "4- Count Words\n" +
        "5- Search Word\n" +
        "6- Replace Word\n" +
        "7- Reverse Text\n" +
        "8- Exit"
    );
    if (choice == 8) {
        break;
    }
    var text = prompt("Enter the text :");
    switch (choice) {
        case "1":
            console.log(text.toUpperCase());
            break;
        case "2":
            console.log(text.toLowerCase());
            break;
        case "3":
            console.log(text.length);
            break;
        case "4":
            console.log(text.trim().split(" ").length);
            break;
        case "5":
            var word = prompt("Enter the word to search for:");
            console.log(text.includes(word));
            break;
        case "6":
            var oldWord = prompt("Enter the word to replace:");
            var newWord = prompt("Enter the new word:");
            console.log(text.replaceAll(oldWord, newWord));
            break;
        case "7":
            var reverse = "";
            for (var i = text.length - 1; i >= 0; i--) {
                reverse += text[i];
            }
            console.log(reverse);
            break;
        default:
            console.log("Wrong Choice");
    }
} while (true);