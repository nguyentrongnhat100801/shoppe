var authenForm = document.querySelector('.authen-form');
var loginForm = document.querySelector('.login-form');
var modalEvent = document.querySelector('.modal');
var displayForm = document.querySelectorAll('.display-form');
var authFormAuthenForm = document.querySelector('.auth-form-authen-form');
var authFormLoginForm = document.querySelector('.auth-form-login-form');
var authFormControlsUndo =document.querySelectorAll('.auth-form__controls-undo');
var authFormHeaderAuthenForm =document.querySelector('.auth-form__header-authen-form');
var authFormHeaderLoginForm =document.querySelector('.auth-form__header-login-form');
var inShop = document.querySelector('.in-shop');
var outShop = document.querySelector('.out-shop');
var inShopItems = document.querySelectorAll('.in-shop-item');
var outShopItems = document.querySelectorAll('.out-shop-item');
var loginNameMember = document.querySelector('.login-name-member');
var loginMember = document.querySelector('.login-member');
var logOutMember = document.querySelector('.log-out-member')


authenForm.onclick = function(){
    modalEvent.classList.remove('display-form');
    authFormAuthenForm.classList.remove('display-form');

};

loginForm.onclick = function(){
    modalEvent.classList.remove('display-form');
    authFormLoginForm.classList.remove('display-form');

};

for(i=0 ; i<authFormControlsUndo.length ; i++){
    var controlsUndo = authFormControlsUndo[i];
    controlsUndo.onclick = function(){
            authFormLoginForm.classList.add('display-form');
            authFormAuthenForm.classList.add('display-form');
            modalEvent.classList.add('display-form');
    }
    
}

authFormHeaderAuthenForm.onclick= function(){
    authFormAuthenForm.classList.remove('display-form');
    authFormLoginForm.classList.add('display-form');
}

authFormHeaderLoginForm.onclick= function(){
    authFormAuthenForm.classList.add('display-form');
    authFormLoginForm.classList.remove('display-form');
}

for(i=0 ; i<inShopItems.length ; i++){
    inShopItem = inShopItems[i];
    inShopItem.onclick = function(){
        inShop.classList.remove('display-form');
        outShop.classList.add('display-form');
    }
}

for(i=0 ; i<outShopItems.length ; i++){
    outShopItem = outShopItems[i];
    outShopItem.onclick = function(){
        inShop.classList.add('display-form');
        outShop.classList.remove('display-form');
    }
}

loginMember.onclick = function(){
    authenForm.classList.add('display-form');
    loginForm.classList.add('display-form');
    loginNameMember.classList.remove('display-form');
    modalEvent.classList.add('display-form');
}

logOutMember.onclick = function(){
    authenForm.classList.remove('display-form');
    loginForm.classList.remove('display-form');
    loginNameMember.classList.add('display-form');
}




