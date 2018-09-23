//Use RegEx to validate form

function valdidateForm(){
 
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var telePhone = document.getElementById('telNo').value;
    var emailAdress = document.getElementById('email').value;


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

    // output messages
    var alertMsg = 'Wrong email adress'

    // create a pattern to test an email address
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var fNameRegEx = /^[0-9]+$/;
    var lNameRegEx = /^[0-9]+$/;
    var telNoRegEx = /^[0-9]+$/;

    // valdidate email adress
    if(emailRegEx.test(emailAdress)) {
        document.getElementById('email').style.backgroundColor = 'green';
    } else {
        document.getElementById('email').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }

    // valdidate phone number
    if(telNoRegEx.test(telNo)) {
        document.getElementById('telNo').style.backgroundColor = 'green';
    } else {
        document.getElementById('telNo').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }

    // valdidate last name
    if(lNameRegEx.test(lname)) {
        document.getElementById('lname').style.backgroundColor = 'green';
    } else {
        document.getElementById('lname').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }

     // valdidate first name
     if(fNameRegEx.test(fname)) {
        document.getElementById('fname').style.backgroundColor = 'green';
    } else {
        document.getElementById('fname').style.backgroundColor = 'red';
        console.log("Number incorrect")
    }




}


