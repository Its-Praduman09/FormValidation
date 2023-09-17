function validation()
{
    let username=document.getElementById('username').value;
    let number=parseInt(document.getElementById('number').value);
    let nLength=document.getElementById('number').value.length;
    let password=document.getElementById('password').value;
    let rpassword=document.getElementById('rpassword').value;
   // alert(rpassword);
    if(username=="")
    {
        document.getElementById('EE1').innerHTML="Please Enter User Name";
        document.getElementById('username').focus();
        return false;
    }
    if(!username.includes('@'))
    {
        document.getElementById('EE1').innerHTML="Please Include @ Username Field";
        document.getElementById('username').focus();
        return false;
    }
    if(!username.includes('gmail.com'))
    {
        document.getElementById('EE1').innerHTML="Please Include gmail.com in Username Field";
        document.getElementById('username').focus();
        return false;
    }
   /* if(number=="")
    {
        document.getElementById('EE2').innerHTML="Please Enter Mobile Number";
        document.getElementById('number').focus();
        return false;
    }*/
    if(isNaN(number))
    {
        document.getElementById('EE1').innerHTML="";
        document.getElementById('EE2').innerHTML="Please Fill Number";
        document.getElementById('number').focus();
        return false;
    }
    if(nLength!==10)
    {
        document.getElementById('EE1').innerHTML="";
        document.getElementById('EE2').innerHTML="Number Must Be 10 Digits";
        document.getElementById('number').focus();
        return false;
    }
    if(password=="")
    {
        document.getElementById('EE2').innerHTML="";
        document.getElementById("EE3").innerHTML="Please Enter Password";
        document.getElementById('password').focus();
        return false;
    }
    if(!password.includes('@'))
    {
        document.getElementById('EE3').innerHTML="Please Include Special Character";
        document.getElementById('password').focus();
        return false;
    }
    if(rpassword=="")
    {
        document.getElementById('EE3').innerHTML="";
        document.getElementById('EE4').innerHTML="Please Re-Enter Password";
        document.getElementById('rpassword').focus();
        return false;
    }
    if(password!=rpassword)
    {
        document.getElementById('EE3').innerHTML="Password and Re-Password Not Matched";
        document.getElementById('password').value="";
        document.getElementById('rpassword').value="";
        document.getElementById('password').focus();
        return false;
    }
    if(password==rpassword)
    {
        alert("User Register SuccessFully");
        window.location.href='index1.html';
    }
    return false;
}