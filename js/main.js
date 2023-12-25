

//sign up 
//&declaration signup variables
const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput"); 
const signupBtn = document.getElementById("signupBtn"); 
const usernameAlert = document.getElementById("usernameAlert");
const userPasswordAlert = document.getElementById("userPasswordAlert");
const userEmailAlert = document.getElementById("userEmailAlert");
const confirmMsg = document.getElementById("confirmMsg");
const tryAgainMsg = document.getElementById("tryAgainMsg");
const accountExistMsg = document.getElementById("accountExistMsg");

let usersinfo;
//&declaration login varible
const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const wrongMsg = document.getElementById("wrongMsg");
const rquiredMsg = document.getElementById("rquiredMsg");
// &user name from session
const username = localStorage.getItem("sessionUsername");

//Get user info from local strorage
if(localStorage.getItem("users") == null)
{
    usersinfo = [];
}
else
{
    usersinfo = JSON.parse(localStorage.getItem("users"));
}
//********validation************* */
function usernameValidation()
{

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userPasswordValidation()
{
    let regex = /^.{6,8}$/;

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userEmailValidation()
{

    let regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

// check if email regist before
function isExist()
{
    
    for(var i = 0; i < usersinfo.length; i++)
    {

        if(usersinfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() || usersinfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");

            return true
        }
    }
    return false
}
//&&&&&&&sign up&&&&&&&&&&&&&&&&&
function signUp()
{

  userEmailValidation();
  userPasswordValidation();
    isExist();

    if(usernameValidation()==true&&userPasswordValidation() == true &&userEmailValidation() == true && isExist() == false)
    {
        let user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        usersinfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersinfo));
        confirmMsg.classList.replace("d-none", "d-block");
        accountExistMsg.classList.replace("d-block", "d-none");

        tryAgainMsg.classList.replace("d-block", "d-none");
    window.open("index.html", "_self")
    }
    else
    {
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}
//login function
function login()
{

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        rquiredMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < usersinfo.length; i++)
    {
        if(usersinfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersinfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            
            localStorage.setItem('sessionUsername', usersinfo[i].name)
            window.open("home.html", "_self")
            displayUserName();
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}
function displayUserName()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}