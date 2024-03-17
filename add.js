//let a = 5;

//console.log("the value is 5 than ++a is 6 see", ++a);

//let b = 12;

//console.log(b++,++b)

let usersubject1 = prompt("Enter your Subject");
let usersubject2 = prompt("Enter your Subject");
let usersubject3 = prompt("Enter your Subject");

let totalmarks1 = 100;
let totalmarks2 = 100;
let totalmarks3 = 100;
let totalmatks = totalmarks1 + totalmarks2 + totalmarks3; 

let marksobtain1 = +prompt("Enter Your Subject Marks")
let marksobtain2 = +prompt("Enter Your Subject Marks")
let marksobtain3 = +prompt("Enter Your Subject Marks")
document.write("<p>USER_SUBJECT,TOTAL_MARKS,OBTAIN_MARKS</p>")
document.write(usersubject1," = ", totalmarks1," = " , marksobtain1, "<br>",usersubject2 ," = ", totalmarks2," = " ,marksobtain3, "<br>" , usersubject3 ," = ", totalmarks3," = ",marksobtain3,"<br>");
document.write(totalmatks)