// let name="vikram prathakota";
// let email="coldcoffeeshop@gmail.com";
// const coffees=12;
// console.log("Name: "+name);
// console.log("Email: "+email);
// console.log("Number of Coffees: "+coffees);
// let message=function(name, coffees){
//     return "Hello "+name+", you have ordered "+coffees+" coffees. Thank you for choosing Cold Coffee Shop!";
// };
// console.log(message(name, coffees));
// ALERT MESSAGE FOR FORM SUBMISSION
function submitted(){
    alert("Form Submitted Successfully!");
};
// FORM VALIDATION AND ALERT MESSAGE
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    if(name=="" || email=="" || password==""){
        alert("All fields are required.");
        if(password.length<6){
        alert("Password must be at least 6 characters long.");
    };
    };
    console.log("Name: "+name);
    console.log("Email: "+email);
    alert("Hello "+name+", you have successfully logged in. Welcome to Cold Coffee Shop!");
    this.reset();
});
