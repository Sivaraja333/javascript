/* Form Handlings  */

var form_validations = () => {

    var pwd = document.querySelector('#pwd').value
    var cpwd = document.querySelector('#cpwd').value

    if (pwd == undefined || pwd == "") {
        window.alert("Enter Password")
    }
    else if (cpwd == undefined || cpwd == "") {
        window.alert("Enter Confirm Password")
    }
    else if (pwd == cpwd) {
        window.alert("Both are Matched")
    }
    else {
        window.alert("Both details are Not Matched")
    }

}

//document.querySelector('button').addEventListener('click', form_validations);
//document.querySelector('button').onClick = form_validations()