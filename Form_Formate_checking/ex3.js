/* Form Handlings  */

var form_validations = () => {

    //Target_Inputs
    var unameDOM = document.getElementById('uname')



    /*
    var emailDOM = document.getElementById('email')
    var pwdDOM = document.getElementById('pwd')
    */


    //Err_DOM
    var unameErr = document.getElementById('uname_err')

    /*
    var emailErr = document.getElementById('email_err')
    var pwdErr = document.getElementById('pwd_err')
    */

    var status = true


    //Icons
    var wrong = `<i class="fas fa-power-off"></i>`




    //Conditions..
    if (uname.value == undefined || uname.value == "") {
        unameErr.innerHTML = `${wrong} Enter Your name`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false//stop execution...
    }
    else if (!uname.value.match(/^[a-z]+$/)) {
        unameErr.innerHTML = `${wrong} Name must be Alphabets [a-z]...`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false
    }
    else {
        document.getElementById('uname_err').innerText = ""
        unameDOM.style.border = "1px solid #e5e5e5"
    }

    if (email.value == undefined || email.value == "") {
        emailErr.innerHTML = `${wrong} Enter Your Email`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        emailErr.innerHTML = `${wrong} Enter Valid Email name@domain.ext`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else {
        emailErr.innerText = ""
        emailDOM.style.border = "1px solid #e5e5e5"
    }



    if (pwd.value == undefined || pwd.value == "") {
        pwdErr.innerHTML = `${wrong} Enter Your Password`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else if (!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else {
        pwdErr.innerText = ""
        pwdDOM.style.border = "1px solid #e5e5e5"
    }

    return status//true
}