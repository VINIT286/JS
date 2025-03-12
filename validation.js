const reg= ()=>{
   let name=document.querySelector('#name').value
   let email=document.querySelector('#email').value
   let mobile=document.querySelector('#mobile').value
   let pass=document.querySelector('#pass').value
   let cpass=document.querySelector('#cpass').value
   console.log(name,email,mobile,pass,cpass)

    if(name == '')
    {
        window.alert("Please enter your name ");
        document.querySelector("#name").focus();
        return false;
    }

    else if(email =='')
    {
        window.alert("Please enter your Email");
        document.querySelector("#email").focus();
        return false;
    }
    else if(!(email.includes('@'))){
        window.alert("Please include @ in email field");
        document.querySelector("#email").focus();
        return false; 
    }
    else if(!(email.includes('.com'))||(email.includes('.in'))){
        window.alert("Please enter proper  email address");
        document.querySelector("#email").focus();
        return false; 
    }
    else if(mobile == '')
    {
        window.alert("Please enter proper  mobile number");
        document.querySelector("#mobile").focus();
        return false; 
    }
    else if (mobile.length !=10)
    {
        window.alert("mobile number should be 10 digit");
        document.querySelector("#mobile").focus();
        return false;
    }
    else if (pass =='')
    {
        window.alert("Please enter your password ");
        document.querySelector("#pass").focus();
        return false;
    } 
    else if(pass.length <8)
    {
        window.alert(" password should be of 8 character  ");
        document.querySelector("#pass").focus();
        return false;
    } 
    else if (pass!=cpass)
    {
        window.alert(" Confrim your password ");
        document.querySelector("#pass").value ="";
        document.querySelector("#cpass").value= "";
        document.querySelector("#pass").focus();
        return false;
    }

}




   
   
   
    