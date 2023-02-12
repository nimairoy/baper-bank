// step 1. add event listener with the money withdraw button and declare a annonimus function
document.getElementById('withdrawButton').addEventListener('click', function(){
    

    // step 2. find the input field and get the value from input 
    const withdrawInputAmount = document.getElementById('withdrawInput');
    const withdrawAmountString = withdrawInputAmount.value;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);

    // clear the input field after execute the value
    withdrawInputAmount.value = '';
    // validation 
    if(isNaN(withdrawAmountNumber)){
        alert('Please provide a valid Number');
        return;
    }  

    // step 3. find the h2 text and get the inner text from the h2 tag and convert it from string to Number
    const withdrawText = document.getElementById('withdrawText');
    const withdrawTextString = withdrawText.innerText;
    const withdrawTextNumber = parseFloat(withdrawTextString);

    
    // step 5. find the total balance
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

     // withdraw amount validation
     if(withdrawAmountNumber < 0){
        alert('Please provide a valid Number');
        return;
    }

     // withdraw amount validation
     if(withdrawAmountNumber > totalBalanceNumber){
        alert('You have no sufficient Balance.');
        return;
    }


    // step 4. calculate the withdraw amount 
    const currentWithdraw = withdrawTextNumber + withdrawAmountNumber;
    // show the total withdraw in the h2 text
    withdrawText.innerText = currentWithdraw;


    // step .6 calculate the total balance after withdraw the money 
    const currentTotalBanlance = totalBalanceNumber - withdrawAmountNumber;
    // show the current total balance into h2 text
    totalBalance.innerText = currentTotalBanlance;

    
})