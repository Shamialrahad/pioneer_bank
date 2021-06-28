//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber+currentDepositNumber;

    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + depositNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value = "";

})                                                  
function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

