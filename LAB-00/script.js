// ===== Task 1 =====
// DEFINING VARIABLES IN JAVASCRIPT
/*
var name="Vikram Prathakota";
var cls="CSE-03";
let age="19";
const pi=3.1412;
console.log("Name :"+name);
console.log("class :"+cls);
console.log("Age :"+age);
console.log("Value of pi :"+pi);
age=20;
console.log("Modified age :"+age);
*/

// Task-2
//Create Basic Functions in JavaScript
/*
function Arithmetic(a,b)
{
	console.log("value of a+b :"+(a+b));
	console.log("value of a-b :"+(a-b));
	console.log("value of a*b :"+(a*b));
	if(b>0)
	{
		console.log("value of a/b :"+(a/b));
	}
	else
	{
		console.log("DIVISION IS NOT POSSIBLE");
	}
}
var a=Number(prompt("Enter a number :"));
var b=Number(prompt("Enter another number :"));
console.log("value of a :"+a);
console.log("value of b :"+b);
Arithmetic(a,b);
let name=prompt("Enter your name :");
if(name != null)
{
	alert("Hello "+name);
}
*/
// ARROW FUNTIONS
/*
var a=Number(prompt("Enter a number :"));
var b=Number(prompt("Enter another number :"));
const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;
console.log("value of a :"+a);
console.log("value of b :"+b);
console.log("value of a+b :"+add(a,b));
console.log("value of a-b :"+sub(a,b));
console.log("value of a*b :"+multiply(a,b));
console.log("value of a/b :"+divide(a,b));
*/

// TASK-3
/*
alert("Welcome to JAVASCRIPT");
let name=prompt("Enter your name :");
alert("Welcome "+name);
let age=Number(prompt("Enter your age :"));
let cls=prompt("Enter your class : ");
console.log("Name : "+name);
console.log("Class : "+cls);
console.log("Age : "+age);
*/

// TASK-04
/*
console.log("Javascript file is running successfully !!");
alert("JS connexted successfully ");
function changeText()
{
	document.getElementById("text").innerHTML="Text changed using Javascript";
	document.getElementById("text").style.color="red";
	document.getElementById("text").style.fontWeight="bold";
	console.log("change text button clicked");
}
function undoChange()
{
	document.getElementById("text").innerHTML="Arrays are list of values ";
	document.getElementById("text").style.color="black";
	document.getElementById("text").style.fontWeight="bold";
	console.log("undo change button clicked");
}
function AddText()
{
	let p=document.createElement("p");
	p.innerHTML="This text is added";
	p.style.fontWeight="bold";
	document.getElementById("container").appendChild(p);
}
function RemoveText()
{
	let container=document.getElementById("container");
	if(container.lastChild)
	{
		container.removeChild(container.lastChild);
	}
}
*/

// task-5
/*
function apply()
{
	let element=document.getElementById("task5")
	element.style.color="red";
	element.style.fontSize="20px";
}
function toggle()
{
	document.getElementById("task5").classList.toggle("myStyle");
}
*/

// ===== Task 6: Mouse Hover using JavaScript only =====

document.addEventListener("DOMContentLoaded", function () {

  let box = document.getElementById("hover");
  box.style.width = "200px";
  box.style.height = "50px";
  box.style.backgroundColor = "lightgray";
  box.style.textAlign = "center";
  box.style.lineHeight = "50px";
  box.style.fontWeight = "bold";
  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";
    box.innerHTML = "Mouse Over";
  });
  box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "lightgray";
    box.style.color = "black";
    box.innerHTML = "Hover over me";
  });

});
document.getElementById("myForm").addEventListener("submit",function(event){
	event.preventDefault();
	let name=document.getElementById("name").value;
	let age=document.getElementById("age").value;
	let email=document.getElementById("email").value;
	if(name===""||age===""||email==="")
	{
		alert("All fields are required");
		return;
	}
	if(age<=0)
	{
		alert("Please enter a valid age");
		return;
	}
	document.getElementById("result").innerHTML=
	"Form submitted successfully !! <br>"+
	"Name :"+name+"<br>"+
	"Age :"+age+"<br>"+
	"Email :"+email;
	console.log("Form submitted");

});
let name=prompt("Enter your name : ");
if(name!=null)
{
	alert("Welcome "+name+" !! ");
}
function printPage() {
  window.print();
}