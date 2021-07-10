//showPassword
function showpwd()
{
    var pwdtextBox=document.getElementById('pwd')
    var stBtn=document.getElementsByClassName('input-group-text')[0]

    if(pwdtextBox.type=="password")
    {
        pwdtextBox.type="text"
        stBtn.innerHTML=`<i class="bi bi-eye-fill"></i>`
    }
    else
    {
        pwdtextBox.type="password"
        stBtn.innerHTML=`<i class="bi bi-eye-slash-fill"></i>`
    }

}


//captchaCode
function captchaCode()
{
    var r=Math.random()*1000000;
    document.getElementsByClassName('form-control-plaintext')[0].value=Math.floor(r);
}


//form validations
function validations()
{

    var status=true;

    //unameDOM
    var unameTextbox=document.getElementById('uname')
    var unameSpan=document.getElementById('unameSpan')

     //emailDOM
     var emailTextbox=document.getElementById('email')
     var emailSpan=document.getElementById('emailSpan')

     //passwordDOM
     var pwdTextbox=document.getElementById('pwd')
     var pwdSpan=document.getElementById('pwdSpan')


     //VerficationDOM
     var verficationTextbox=document.getElementById('verfication')
     var verficationSpan=document.getElementById('verficationSpan')


     var captchaNo=document.getElementsByClassName('form-control-plaintext')[0].value

     



    //icons
    var wrong=`<i class="bi bi-x-circle-fill"></i>`
    var right=`<i class="bi bi-check-circle-fill"></i>`


    //uname
    if(unameTextbox.value=="")
    {
        unameSpan.innerHTML=`${wrong} Enter Name`//span
        unameSpan.style.color="red"//span
        unameTextbox.style.border=`1px solid red`//textbox
        status=false;
    }
    else if(!unameTextbox.value.match(/^[a-z]+$/))
    {
        unameSpan.innerHTML=`${wrong} Name Must be Lowercase Alphabets `//span
        unameSpan.style.color="red"//span
        unameTextbox.style.border=`1px solid red`//textbox
        status=false;
    }
    else
    {
        unameSpan.innerHTML=`${right} Thank You`//span
        unameSpan.style.color="green"//span
        unameTextbox.style.border=`1px solid green`//textbox
        
    }


    //email
    if(emailTextbox.value=="")
    {
        emailSpan.innerHTML=`${wrong} Enter Email`//span
        emailSpan.style.color="red"//span
        emailTextbox.style.border=`1px solid red`//textbox
        status=false;
    }
    else if(!emailTextbox.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
    {
        emailSpan.innerHTML=`${wrong} Enter Valid Email <small>ex: name@domain.ext</small>`//span
        emailSpan.style.color="red"//span
        emailTextbox.style.border=`1px solid red`//textbox
        status=false;
    }
    else
    {
        emailSpan.innerHTML=`${right} Thank You`//span
        emailSpan.style.color="green"//span
        emailTextbox.style.border=`1px solid green`//textbox
        
    }


     //password
     if(pwdTextbox.value=="")
     {
        pwdSpan.innerHTML=`${wrong} Enter Password`//span
        pwdSpan.style.color="red"//span
        pwdTextbox.style.border=`1px solid red`//textbox
         status=false;
     }
     else if(!pwdTextbox.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/))
     {
        pwdSpan.innerHTML=`${wrong} Must be 1-Uppercase,1-Lowercase,1-Number,1-Special Character`//span
        pwdSpan.style.color="red"//span
        pwdTextbox.style.border=`1px solid red`//textbox
        status=false;
     }
     else
     {
        pwdSpan.innerHTML=`${right} Thank You`//span
        pwdSpan.style.color="green"//span
        pwdTextbox.style.border=`1px solid green`//textbox
         
     }



     //verification
     if(verficationTextbox.value=="")
     {
        verficationSpan.innerHTML=`${wrong} Enter Verification code`//span
        verficationSpan.style.color="red"//span
        verficationTextbox.style.border=`1px solid red`//textbox
        status=false;
     }
     else if(!verficationTextbox.value.match(/^[0-9]+$/))
     {
        verficationSpan.innerHTML=`${wrong} Must be Numbers Only`//span
        verficationSpan.style.color="red"//span
        verficationTextbox.style.border=`1px solid red`//textbox
        status=false;
     }
     else if(verficationTextbox.value==captchaNo)
     {
        verficationSpan.innerHTML=`${right} Thank You`//span
        verficationSpan.style.color="green"//span
        verficationTextbox.style.border=`1px solid green`//textbox
     }
     else
     {
        verficationSpan.innerHTML=`${wrong} Invalid code `//span
        verficationSpan.style.color="red"//span
        verficationTextbox.style.border=`1px solid red`//textbox
        status=false;
     }



return status;
}