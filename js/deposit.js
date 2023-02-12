// step 1. add event handler with deposit button 
document.getElementById('depositButton').addEventListener('click', function(){
    

    // step 3. find the deposit input field get the value from the input field
    const depositMoneyInput = document.getElementById('depositMoney');
    const depositInput = depositMoneyInput.value;
    const depositInputMoney = parseFloat(depositInput);

    
    // step 7. clear the deposit input field
    depositMoneyInput.value = '';


    // validation
    if(isNaN(depositInputMoney)){
        alert('Please provide a valid Number.');
        return;
    }
    
    if(depositInputMoney<0){
        alert('Please provide a valid Number.');
        return;
    }

    // step 4. h2 id find the deposit amount quantity and show it's update value over on the div
    const amountQuantity = document.getElementById('depositAmount');
    const amountString = amountQuantity.innerText;
    const amountNumber = parseFloat(amountString);

    // step 5. get the both number value from the h2-innerText and from the input value and add them
    const currentDeposit = depositInputMoney + amountNumber;
    // final deposit 
    amountQuantity.innerText = currentDeposit;


    // step 6. find the total balance and update the value
    const totalBanlance = document.getElementById('totalBalance');
    const totalBalanceString = totalBanlance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    // current total balance after deposit the money
    const currentTotalBanlance = totalBalanceNumber + depositInputMoney;
    //current balance
    totalBanlance.innerText = currentTotalBanlance;


});