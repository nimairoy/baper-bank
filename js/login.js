// step 1. add event handler to the login button
document.getElementById('loginButton').addEventListener('click',function(){
    // step 2. get the email address from inside of the input field
    const emailField = document.querySelector('#userEmail');
    const email = emailField.value;

    // step 3. get the password from the inside of the input password
    const passField = document.querySelector('#userPass');
    const password = passField.value;

    // clear the input field
    emailField.value = "";
    passField.value = "";

    // step 4. verify the email and password  
    // Warning Don't Use this process in case of client site
    if(email=== 'user@gmail.com' && password === 'secret1'){
        window.location.href='bank.html';
    }else{
        alert('invalid user');
    }
})