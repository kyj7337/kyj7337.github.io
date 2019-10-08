const id = document.getElementsByClassName('phone')[0];
const password = document.getElementsByClassName('password')[0];
const loginButton = document.getElementById('login');

loginButton.disabled = true;
id.addEventListener('keydown', function () {
    loginButton.disabled = true;
})
/*
password.addEventListener('keydown', function () {
    if (id.value || password.value) {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "#3897f0";
    } else {
        loginButton.disabled = true;
    }

})
*/
password.addEventListener('keydown', function(){
    if(id.value ==''){
        loginButton.disabled = true;
    }else if(id.value || password.value){
        loginButton.disabled= false;
        loginButton.style.backgroundColor= "#3897f0";
    }else{
        loginButton.disabled=true;
    }
})
/* 이벤트를 쓰지 않은 코드
if(id.value && password.value){
    loginButton.style.backgroundColor = "#3897f0";
    loginButton.disabled=false;
    
}else{
    loginButton.disabled = true;
}
*/
/* id.value , password.value의 값이 아무것도 없을 때 의 의미다.

if(id.value=='' && password.value==''){
    loginButton.disabled='false';
    loginButton.style.backgroundColor = "#3897f0";
}else{
    loginButton.disabled=true;
}
*/

/*활성시 색깔 : #3897f0 */

/*document.getElementsByClassName('login')[0].disabled=false;
 */





//클릭시 색 바꾸는 과정

/*loginButton.addEventListener('click',function(){
    loginButton.style.backgroundColor = "#3897f0";
})*/

/* 병민이형 코드
password.addEventListener('keydown',function(){
    
    loginButton.style.backgroundColor = "#3897f0";
    loginButton.disabled = false;
})
*/