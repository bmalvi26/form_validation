function validate(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    atpos = email.indexOf("@");
    dotpos = email.indexOf(".");
    var password = document.getElementById('pass').value;
    if(fname == ""){
       document.getElementById('firstname').innerHTML='** Please fill up name';
       return false; 
    }
    if(!isNaN(fname)){
        document.getElementById('firstname').innerHTML='**Only Characters are allowed';
        return false; 
     }    
    if(lname == ""){
        document.getElementById('lastname').innerHTML='** Please fill up name';
        return false; 
     }
     if(isNaN(age)){
        document.getElementById('Agen').innerHTML='** Please Enter the Age in Number';
        return false; 
     }
    if(email == "" || atpos<1 || (dotpos-atpos)<3){
        document.getElementById('emailid').innerHTML='Please enter a valid email';
        return false;
    }
    if(password == "" ){
        document.getElementById('password').innerHTML = 'Please enter password';
        return false;
    }
    if(password.length <=4 || password.length >10){
        document.getElementById('password').innerHTML = 'password range must be between 4 and 10 alphabetic characters or numeric';
        return false;
    }
  
    return true;
     
}
