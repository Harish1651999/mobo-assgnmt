function validate(){
    
    let nameValue = document.querySelector('#name').value;
    let surnameValue = document.querySelector('#surname').value;
    let mailValue = document.querySelector('#mail').value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let numberValue = document.querySelector('#number').value;
    let subjectValue = document.querySelector('#subject').value;
    let messageValue = document.querySelector('#message').value;

    if(nameValue == ""){
        alert("Please enter your name")
    }

    else if(surnameValue == ""){
        alert("Please enter your surname")
    }

    else if(!reg.test(mailValue)){
        alert("Please enter your mail")
    }

    else if((numberValue.length != 10) || (Number.isInteger(numberValue))){
        alert("Please enter your number")
    }

    else if(subjectValue == ""){
        alert("Please enter your subject")
    }

    else if(messageValue == ""){
        alert("Please enter your message")
    }

    else{
        alert("Form Submitted Successfully")
    }

    document.querySelector('#name').value = "";
    document.querySelector('#surname').value = "";
    document.querySelector('#mail').value = "";
    document.querySelector('#number').value = "";
    document.querySelector('#subject').value = "";
    document.querySelector('#message').value = "";

}