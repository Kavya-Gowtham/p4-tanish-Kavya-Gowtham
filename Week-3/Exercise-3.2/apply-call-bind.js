// bind() function example
var person = { 
    firstName: "Harry",
    lastName: "Potter",

    displayDetails: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

var name = {
    firstName: "John",
    lastName: "Denimr",
}

var personDetails =  person.displayDetails;
personDetails(); //this is will display undefined as the this object is in global context and not within person object

var bindedPersonDetails = person.displayDetails.bind(person); 
bindedPersonDetails(); // this is will display Harry Potter as the parameters are binded with this object

bindedPersonDetails(name); 
/* even if we provide name object the above output will be of person object because we binded person object to that function
and not name object */


//apply() call() function example
var personName = { 
    firstName: "juker",
    lastName: "berg",
}

function displayDetails(occupation) {
    console.log(occupation + ", FullName: " + this.firstName + " " + this.lastName);
}

displayDetails.apply(personName, ["Engineer"]); //output is Engineer, FullName: juker berg

displayDetails.apply(personName, ["Doctor"]); /*output is Doctor, FullName: juker berg
In apply() the arguments are passed as array
this helps to be in runtime pass of arguments and dynamic*/

displayDetails.call(personName, "Archeologist"); /*output is Archeologist, FullName: juker berg
differece is that we can pass arguments in call directly and not in an array
this is more of compile time arguments*/
