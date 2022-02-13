function logIn(a,b){
    const email = document.getElementById(a).value;
    const password = document.getElementById(b).value; 
    if(email == 'admin' && password == 'password'){
        return "http://www.google.com";
    }
    else{
        alert("Wrong Email or Password");
        return "home.html"
    }
}