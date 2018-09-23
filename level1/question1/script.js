//Use RegEx to validate form

function valdidateForm(){
    
    // create variables for elements
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var telePhone = document.getElementById('telNo').value;
    var emailAdress = document.getElementById('email').value;

     // create a regex patterns
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var fNameRegEx = /[a-zA-Z]{2,4}/i;
    var lNameRegEx = /[a-zA-Z]{2,4}/i;
    var telNoRegEx = /[0-9]{8}/;


    //valdidate that fields are not empty
    if(firstName == "") {
        console.log("Please fill in first name");
    } if(lastName == "") {
        console.log("Please fill in last name");
    } if(telePhone == "") {
        console.log("Please fill in phone number");
    }  if(emailAdress == "") {
        console.log("Please fill in your email adress")   
    } else {
        console.log("sucess!");
    }

    // valdidate email adress
    if(emailRegEx.test(emailAdress)) {
        document.getElementById('email').style.backgroundColor = 'green';
    } else {
        document.getElementById('email').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }

    // valdidate phone number
    if(telNoRegEx.test(telePhone)) {
        document.getElementById('telNo').style.backgroundColor = 'green';
    } else {
        document.getElementById('telNo').style.backgroundColor = 'red';
    }

    // valdidate last name
    if(lNameRegEx.test(lastName)) {
        document.getElementById('lname').style.backgroundColor = 'green';
    } else {
        document.getElementById('lname').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }

     // valdidate first name
     if(fNameRegEx.test(firstName)) {
        document.getElementById('fname').style.backgroundColor = 'green';
    } else {
        document.getElementById('fname').style.backgroundColor = 'red';
        alert("Number incorrect")
    }
}






