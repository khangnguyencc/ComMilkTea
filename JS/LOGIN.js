//Kiểm tra dữ liệu nhập
function check_regis(){
    var inputs = document.getElementById("my-form").elements;

    //Kiểm tra username không được nhập ký tự đặc biệt
    var regex_check_1 = /[~!@#$%^&*()_+|}{:;'"<>?,./]/;
    //Kiểm tra chỉ được nhập chữ không được nhập số
    const regex_check_2 = /^[a-zA-Z0-9_.+-]+@gmail.com$/;

    var user_name = inputs[0];
    var email = inputs[1];
    var password = inputs[2];
    var cfpassword = inputs[3];

    if(user_name.value == "" || email.value == "" || password.value == "" || cfpassword.value == ""){
        alert("Hãy nhập đầy đủ thông tin để đăng ký!");
        return false;
    }
    else if(user_name.value.length <= 5){
        document.getElementById("usnamecheck").style.border = "1px solid red";
        document.getElementById("usname").innerHTML = "Độ dài UserName phải > 5";
        document.getElementById("email").innerHTML = "";
        document.getElementById("password").innerHTML = "";
        document.getElementById("cfpassword").innerHTML = "";
        return false;
    }
    else if(regex_check_1.test(user_name.value)){
        document.getElementById("usnamecheck").style.border = "1px solid red";
        document.getElementById("usname").innerHTML = "UserName Sai Định Dạng";
        document.getElementById("email").innerHTML = "";
        document.getElementById("password").innerHTML = "";
        document.getElementById("cfpassword").innerHTML = "";
        return false;
    }
    else if(!regex_check_2.test(email.value)){
        document.getElementById("emailcheck").style.border = "1px solid red";
        document.getElementById("email").innerHTML = "Email Sai Định Dạng";
        document.getElementsByClassName("usname").innerHTML = "";
        document.getElementById("password").innerHTML = "";
        document.getElementById("cfpassword").innerHTML = "";
        return false;
    }
    else if(password.value.length <= 5){
        document.getElementById("passcheck").style.border = "1px solid red";
        document.getElementById("password").innerHTML = "Độ dài Password phải > 5";
        document.getElementById("email").innerHTML = "";
        document.getElementById("usname").innerHTML = "";
        document.getElementById("cfpassword").innerHTML = "";
        return false;
    }
    else if(!regex_check_1.test(password.value)){
        document.getElementById("passcheck").style.border = "1px solid red";
        document.getElementById("password").innerHTML = "Password cần có ký tự đặc biệt";
        document.getElementById("email").innerHTML = "";
        document.getElementById("usname").innerHTML = "";
        document.getElementById("cfpassword").innerHTML = "";
        return false;
    }
    else if(cfpassword.value != password.value){
        document.getElementById("cfpasscheck").style.border = "1px solid red";
        document.getElementById("cfpassword").innerHTML = "Password chưa đồng bộ";
        document.getElementById("password").innerHTML = "";
        document.getElementById("email").innerHTML = "";
        document.getElementById("usname").innerHTML = "";
        return false;
    }
    else{
        return true;
    }
}

//Kiểm tra USNAME khi nhập
function check_all(th){
    var inputs = document.getElementById("my-form").elements;

    //Kiểm tra username không được nhập ký tự đặc biệt
    var regex_check_1 = /[~!@#$%^&*()_+|}{:;'"<>?,./]/;
    //Kiểm tra chỉ được nhập chữ không được nhập số
    const regex_check_2 = /^[a-zA-Z0-9_.+-]+@gmail.com$/;

    var user_name = inputs[0];
    var email = inputs[1];
    var password = inputs[2];
    var cfpassword = inputs[3];

    let a = event.key;

    if(th == 1){
        
        if(regex_check_1.test(a)){
            document.getElementById("usnamecheck").style.border = "1px solid red";
            document.getElementById("usname").innerHTML = "UserName Sai Định Dạng";
        }
        else{
            document.getElementById("usnamecheck").style.border = "1px solid #7373F8";
            document.getElementById("usname").innerHTML = "";
        }
    }
    else if(th == 2){
        if(a){
            document.getElementById("emailcheck").style.border = "1px solid #7373F8";
            document.getElementById("email").innerHTML = "";
        }
    }
    else if(th == 3){
        if(a){
            document.getElementById("passcheck").style.border = "1px solid #7373F8";
            document.getElementById("password").innerHTML = "";
        }
    }
    else if(th == 4){
        if(a){
            document.getElementById("cfpasscheck").style.border = "1px solid #7373F8";
        document.getElementById("cfpassword").innerHTML = "";
        }
    }
}





const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});