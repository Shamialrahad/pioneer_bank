const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})