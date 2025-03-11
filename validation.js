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
    else if (mobile =='')
    {
        window.alert("Please enter your mobile number ");
        document.querySelector("#mobile").focus();
        return false;
    }
    else if (pass =='')
    {
        window.alert("Please enter your password ");
        document.querySelector("#pass").focus();
        return false;
    } 
    else if (cpass =='')
    {
        window.alert(" Confrim your password ");
        document.querySelector("#cpass").focus();
        return false;
    }   
}




   
   
   
    