
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = "You are Subscribed!";
    }
    else{
        subResult.textContent = "You are not Subscribed!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with visa!";
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = "You are paying with master card!";
    }
    else if (payPalBtn.checked){
        paymentResult.textContent = "You are paying with paypal!";
    }    
    else{
        paymentResult.textContent = "Payment method not checked";
    }
}