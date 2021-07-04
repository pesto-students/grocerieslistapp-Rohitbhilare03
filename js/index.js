let userName = '';
var GroceryList = [
    {
        userName: 'rohit',
        items: ["Tomato", "Cabbage"]
    },
    {
        userName: 'mahesh',
        items: ["abcd", "asdasd"]
    }
];
IsUserLoggedIn();


function IsUserLoggedIn() {
    if (localStorage.getItem('loggedInUser')) {
        console.log('send to index');
        userName = localStorage.getItem('loggedInUser');
        groceryListAppendInHtml(getGroceryListFromLocalStoragebyUser(userName));
    }
    else
        console.log('notlogged in');
}

function addItem() {
    let groceryList = document.getElementById('groceryList');
    let Item = document.getElementById('item').value;
    let element = document.createElement('li');
    console.log(element.innerHTML = Item);
    groceryList.appendChild(element);
    let grocery = getGroceryListFromLocalStoragebyUser(userName);
    console.log(grocery);
}

function groceryListAppendInHtml(grocery) {
    for (let index = 0; index < grocery?.length; index++) {
        let groceryList = document.getElementById('groceryList');
        let element = document.createElement('li');
        console.log(element.innerHTML = list.items[index]);
        groceryList.appendChild(element);
    }
}

function getGroceryListFromLocalStoragebyUser(userName) {
    let list = JSON.parse(localStorage.getItem('GroceryList'));
    if(list)
    {
        list = list.filter(eachGrocery => eachGrocery.userName == userName)[0];
        return list;
    }
    else  
    {
        console.log('no list');
        return [];
    } 
        
}
