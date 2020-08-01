const greet=(first_name,last_name,message) => {
    console.log("Hi" +" "+ first_name + last_name);  
   
    message(first_name);
}
const salutation = (name) => {
    console.log("This code gets executed after the greet function call");
}
greet("jyothi","bogala",salutation);

