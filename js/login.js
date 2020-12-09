var UserList = [];
IsUserLoggedIn();
function LoginUser() {
    let userName = document.getElementById("userName").value;
    let userPassword = document.getElementById("password").value;
    if (IsUserRegistered(userName)) {
        if (checkCredentials(userName, userPassword)) {
            localStorage.setItem('loggedInUser', userName);
            console.log('user login');
        } else
            console.log('incorrect creds');
    }
    else
        RegisterUser(userName, userPassword);
}

function checkCredentials(userName, password) {
    UserList = JSON.parse(localStorage.getItem('users'));
    let userArray = UserList.filter(eachUser => eachUser.userName == userName && eachUser.password == password);
    if (userArray.length > 0)
        return true;
    else
        return false;
}

function IsUserRegistered(userName) {
    UserList = JSON.parse(localStorage.getItem('users'));
    let userArray = UserList.filter(eachUser => eachUser.userName == userName);
    if (userArray.length > 0)
        return true;
    else
        return false;
}

function RegisterUser(userName, Password) {
    if (Password.length > 4) {
        if (UserList.length == 5)
            UserList.slice(0, 1);
        console.log(UserList);
        UserList.push({ userName: userName, password: Password });
        localStorage.setItem('users', JSON.stringify(UserList));
        LoginUser();// login with registered User
    } else {
        console.log('Lenght should be greater');
    }
}

function IsUserLoggedIn() {
    if (localStorage.getItem('loggedInUser'))
        console.log('send to index');
    else
        console.log('notlogged in');
}