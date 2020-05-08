function myFunc() {
    var UserName = document.getElementById('UName').value;
    var Email = document.getElementById('UEmail').value;
    var Password = document.getElementById('UPass').value;
    var UCPassword = document.getElementById('UCPass').value;

    if(UserName=="") {
        document.getElementById('UBlank').innerHTML="Please Enter the Username";
    }
    else if (UserName!="") {
        document.getElementById('UBlank').innerHTML="";
    }
    if (Email=="") {
        document.getElementById('EmailBlank').innerHTML="Please Enter your Email";
    }
    else if(Email) {
        document.getElementById('EmailBlank').innerHTML="";
    }
    if(Password=="") {
        document.getElementById('PassBlank').innerHTML="Please Enter a Password";
    }
    else if (Password!="") {
        document.getElementById('PassBlank').innerHTML="";
}
if(UCPassword=="") {
    document.getElementById('CPassBlank').innerHTML="Please Enter a Password";
}
else if (UCPassword!="") {
    document.getElementById('CPassBlank').innerHTML="";
}
if(Password!=UCPassword) {
    document.getElementById('CPassBlank').innerHTML="Password does not match"
}
else if(UserName!="" && Email && Password!="" && UCPassword!="") {
    document.getElementById('success').innerHTML="Registration Successful"
    window.location=('https://codewit.co/#')
}
}