var UserName = document.getElementById("Username");
var PassWord = document.getElementById("Password");
var user = "admin";
var pwd = "12345";

userValid = () =>
{
    return UserName.value == user ? true:false;
} 

passValid = () =>
{
    return PassWord.value == pwd ? true:false;
}

pass = () =>
{
    $("#LogIn").attr("action","todo.html");
    return true;
}

logout = () =>
{
    window.location.replace("index.html")
}

validLogin = callback =>
{
    if(userValid() && passValid())
    {
        callback();
    }
    else
    {
        alert("Incorrect credentials!");
        return false;
    }
}