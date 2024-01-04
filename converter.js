let rate = 19.8;
let rate2 = rate - 1;
let senderCountry = document.getElementById("senderCountry").value;
let receiverCountry = document.getElementById("receiverCountry").value;
let sendAmountInput = document.getElementById("sendAmount");
let sendAmount = parseFloat(sendAmountInput.value);
let receiveAmountInput = document.getElementById("receiveAmount");
let receiveAmount = parseFloat(receiveAmountInput.value);
let handleFee = document.getElementById("handleFee").value;
let messageError = document.getElementById("errorMessage");
let resultMessage = document.getElementById("resultMessage");
let senderFieldError = document.getElementById("senderField");
let receiverFieldError = document.getElementById("receiverField");
const supportEl = document.getElementById("support");


//Clear Error messages
senderFieldError.textContent = "";
senderFieldError.className = "";
senderFieldError.style.display = "none";

receiverFieldError.textContent = "";
receiverFieldError.className = "";
receiverFieldError.style.display = "none";

// Toggle between Send amount and receive Amount
const toggleButton = document.getElementById("toggleButton");
const senderDiv = document.getElementById("senderDiv");
const receiverDiv = document.getElementById("receiverDiv");
const handler = document.getElementById("handleFee");

toggleButton.addEventListener("click", function () {
  copyButton.style.display = "none";
  if (senderDiv.classList.contains("receiverHidden")) {
    senderDiv.classList.remove("receiverHidden");
    receiverDiv.classList.add("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to receive";
    handler.disabled = false;
    receiveAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";
    

  } else {
    senderDiv.classList.add("receiverHidden");
    receiverDiv.classList.remove("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to send";
    handler.disabled = true;
    sendAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";

  }
});



// Networks options based on selected sender Country
function onSenderCountryChange() {
  senderCountry = document.getElementById("senderCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  receiveAmountInput = document.getElementById("receiveAmount");
  senderFieldError = document.getElementById("senderField");
  
  
  if (senderCountry === "GHANA") {
    sendAmountInput.placeholder = "Enter Amount in GHS";
    receiveAmountInput.placeholder = "Enter Amount in FCFA";
  }
  else {
    sendAmountInput.placeholder = "Enter Amount in FCFA";
    receiveAmountInput.placeholder = "Enter Amount in GHS";
  }
  sendAmountInput.style.textAlign = "center";
  receiveAmountInput.style.textAlign = "center";

  if (senderCountry) {
    senderFieldError.textContent = "";
    senderFieldError.className = "";
    senderFieldError.style.display = "none";
  }
  
  }


// Networks options based on selected receiverCountry
function onReceiverCountryChange() {
  receiverCountry = document.getElementById("receiverCountry").value;
  receiverFieldError = document.getElementById("receiverField");
  

  if (receiverCountry) {
    receiverFieldError.textContent = "";
    receiverFieldError.className = "";
    receiverFieldError.style.display = "none";
  }
}



function roundDown(number) {
  return Math.floor(number / 5) * 5;
}

function roundUp(number) {
  return Math.ceil(number / 5) * 5;
}





function calculateTransactionFee() {
  let transactionFee = 0;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (sendAmount >= rate && sendAmount <= 150) { transactionFee = 5; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 10; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 15; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 20; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 25; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 40; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 70; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 95; }
    else if (sendAmount >= 10001 && sendAmount <= (rate * 1000)) { transactionFee = 200; }
  }

//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (sendAmount >= rate && sendAmount <= 150) { transactionFee = 10; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 15; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 20; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 25; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 40; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 50; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 80; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 120; }
    else if (sendAmount >= 10001 && sendAmount <= (rate * 1000)) { transactionFee = 300; }}
    

//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA") {
    if (sendAmount < 1000) { transactionFee = 0; }
    else if (sendAmount >= 1000 && sendAmount <= 6000) { transactionFee = 500; }
    else if (sendAmount >= 6001 && sendAmount <= 20000) { transactionFee = 1000; }
    else if (sendAmount >= 20001 && sendAmount <= 40000) { transactionFee = 2000; }
    else if (sendAmount >= 40001 && sendAmount <= 60000) { transactionFee = 3000; }
    else if (sendAmount >= 60001 && sendAmount <= 100000) { transactionFee = 4000; }
    else if (sendAmount >= 100001 && sendAmount <= 200000) { transactionFee = 5000; }
    else if (sendAmount >= 200001 && sendAmount <= 400000) { transactionFee = 8000; }
    else if (sendAmount >= 400001 && sendAmount <= 500000) { transactionFee = 10000; }}

  return transactionFee;
}




function calculateTransactionFee2() {
  let transactionFee2 = 0;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 5; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((2000 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((2001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 70; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 95; }
  }

//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((2000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((2001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 50; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 80; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 120; }
  }
//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    if (receiveAmount < ((rate2 * 1000) / 1000)) { transactionFee2 = 0; }
    else if ((receiveAmount >= ((rate2 * 1000) / 1000) && receiveAmount <= ((rate2 * 6000) / 1000))) { transactionFee2 = 500; }
    else if ((receiveAmount >= ((rate2 * 6001) / 1000) && receiveAmount <= ((rate2 * 20000) / 1000))) { transactionFee2 = 1000; }
    else if ((receiveAmount >= ((rate2 * 20001) / 1000) && receiveAmount <= ((rate2 * 40000) / 1000))) { transactionFee2 = 2000; }
    else if ((receiveAmount >= ((rate2 * 40001) / 1000) && receiveAmount <= ((rate2 * 60000) / 1000))) { transactionFee2 = 3000; }
    else if ((receiveAmount >= ((rate2 * 60001) / 1000) && receiveAmount <= ((rate2 * 100000) / 1000))) { transactionFee2 = 4000; }
    else if ((receiveAmount >= ((rate2 * 100001) / 1000) && receiveAmount <= ((rate2 * 200000) / 1000))) { transactionFee2 = 5000; }
    else if ((receiveAmount >= ((rate2 * 200001) / 1000) && receiveAmount <= ((rate2 * 400000) / 1000))) { transactionFee2 = 8000; }
    else if ((receiveAmount >= ((rate2 * 400001) / 1000) && receiveAmount <= ((rate2 * 500000) / 1000))) { transactionFee2 = 10000; }
  }
  return transactionFee2;
}




function calculateAmountToSend() {
  transactionFee2 = calculateTransactionFee2();
  let amountToSend = 0;
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount / 1000) * rate;
    return amountToSend;
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount * 1000) / rate2;
    return amountToSend;
  }

}


function calculateAmountToReceive() {
  transactionFee = calculateTransactionFee();
  let amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / 1000) * rate2);
  } else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / 1000) * rate2);
  }
  return amountToReceive;
}


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function rtConvertAndDisplayRt(event) {
  event.preventDefault();
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  sendAmount = parseFloat(sendAmountInput.value);
  receiveAmountInput = document.getElementById("receiveAmount");
  receiveAmount = parseFloat(receiveAmountInput.value);
  handleFee = document.getElementById("handleFee").value;
  transactionFee = calculateTransactionFee();
  transactionFee2 = calculateTransactionFee2();
  amountToReceive = calculateAmountToReceive();
  amountToSend = calculateAmountToSend();
  messageError = document.getElementById("errorMessage");
  resultMessage = document.getElementById("resultMessage");
  senderFieldError = document.getElementById("senderField");
  receiverFieldError = document.getElementById("receiverField");

  
messageError.textContent = "";
messageError.className = "";
messageError.style.display = "none";


//Field validations
if (sendAmountInput.value === "" && receiveAmountInput.value === "") {
  messageError.textContent = "Please Enter the Amount";
  messageError.className = "red_error";
  messageError.style.display = "block";
} 
else if (sendAmountInput.value !== "" && receiveAmountInput.value === "") {
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}

if (receiveAmountInput.value === "" && sendAmountInput.value === "") {
  messageError.textContent = "Please Enter the Amount";
  messageError.className = "red_error";
  messageError.style.display = "block";
} 
else if (receiveAmountInput.value !== "" && sendAmountInput.value === ""){
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}

   // Domestic transaction errors
  if (senderCountry === receiverCountry) {
    messageError.textContent = `Domestic transfer within ${senderCountry} is not available at the moment`;
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";

  } else if (senderCountry !== "GHANA" && receiverCountry !== "GHANA") {
    messageError.textContent = `Transaction between ${senderCountry} and ${receiverCountry} is not available at the moment`;
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
  }

// Minimum amount errors
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && sendAmount < rate) {
    messageError.textContent = `The minimum to send from GHANA to ${receiverCountry} is ${rate} GHS.`;
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
  }

  else if (senderCountry !== "GHANA" && sendAmount < 1000) {
    messageError.textContent = "The minimum to send from " + senderCountry + " to GHANA is 1000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
  }

// Maximum amount errors
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && sendAmount > ((rate * 1000)/2)) {
    messageError.textContent = `The maximum to send from GHANA to ${receiverCountry} is GHS ${((rate * 1000)/2).toFixed(2)}.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";

  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount > ((rate * 1000)/2)) {
    messageError.textContent = `The maximum to send from ${senderCountry} to GHANA to  is ${(1000000/2).toLocaleString("fr-FR")} FCFA.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
  }


// AMOUNT TO RECEIVE
// Minimum amount error
if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && !sendAmount && receiveAmount < ((rate * 1000) / rate)) {
    messageError.textContent = `The minimum to be received from GHANA to ${receiverCountry} is ${roundUp(Math.round((rate * 1000) / rate)).toLocaleString('fr-FR')} FCFA`;
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";

  }
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount < rate2) {
    messageError.textContent = `The minimum to be received from ${senderCountry} to GHANA is ${rate2.toFixed(2)} GHS`;
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";

  }

//Maximum amount error
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && !sendAmount && receiveAmount > (((rate * 1000) * 1000) / rate)/2) {
    messageError.textContent = `The maximum to be received from GHANA to ${receiverCountry} is ${1000000/2} FCFA.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
  }

  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount > (((rate2 * 1000000) / 1000)/2)) {
    messageError.textContent = `The maximum to be received from ${senderCountry} to GHANA is GHS ${(((rate2 * 1000000) / 1000)/2).toFixed(2)}. For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
}



// RESULTS FOR VALID ENTRIES
  resultMessage.textContent = ""; 
  resultMessage.style.display = "none";
  let totalAmount = sendAmount + transactionFee;
  
  //(GHANA to TOGO) / ADDFee
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= rate && sendAmount <= ((rate * 1000)/2) && handleFee === "ADD FEE" && true) {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA
    Sending: GHS ${sendAmount.toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Total: GHS ${totalAmount.toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";

  }
  //(GHANA to BCB) / ADDFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= rate && sendAmount <= ((rate * 1000)/2) && handleFee === "ADD FEE") {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA
    Sending: GHS ${sendAmount.toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Total: GHS ${totalAmount.toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
    
  }

  //(ALL COUNTRIES to GHANA) / ADDFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= (1000000/2) && handleFee === "ADD FEE") {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: GHS ${amountToReceive.toFixed(2)}
    Sending: ${sendAmount.toLocaleString('fr-FR')} FCFA
    Transaction fee: ${transactionFee.toLocaleString('fr-FR')} FCFA
    Total: ${Math.round(totalAmount).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }

  //(GHANA to TOGO) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= rate && sendAmount <= ((rate * 1000)/2) && handleFee === "SUBSTRACT FEE") {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA
    Sending: GHS ${(sendAmount - transactionFee).toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Total: GHS ${sendAmount.toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }

  //(GHANA to BCB) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= rate && sendAmount <= ((rate * 1000)/2) && handleFee === "SUBSTRACT FEE") {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toFixed(0)} FCFA
    Sending: GHS ${(sendAmount - transactionFee).toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Paying: GHS ${sendAmount.toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }

  //(ALL COUNTRIES to GHANA) / SUBSTRACTFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= (1000000/2) && handleFee === "SUBSTRACT FEE") {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: GHS ${amountToReceive.toFixed(2)}
    Sending: ${Math.round(sendAmount - transactionFee).toLocaleString('fr-FR')} FCFA
    Transaction fee: ${(transactionFee).toLocaleString('fr-FR')} FCFA
    Total: ${Math.round(sendAmount).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }


  // AMOUNT TO RECEIVE RESULTS
  //(GHANA to TOGO) when Amount to receive is entered
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && receiveAmount >= (((rate * 1000) / rate)) && receiveAmount <= ((((rate * 1000) * 1000) / rate)/2)) {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA
    Amount to send: GHS ${amountToSend.toFixed(2)}
    Transaction fee: GHS ${transactionFee2.toFixed(2)}
    Total: GHS ${(amountToSend + transactionFee2).toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }

  //(GHANA to BCB) when amount to receive is entered
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((((rate * 1000) * 1000) / rate)/2)) {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA
    Amount to send: GHS ${amountToSend.toFixed(2)}
    Transaction fee: GHS ${transactionFee2.toFixed(2)}
    Total: GHS ${(amountToSend + transactionFee2).toFixed(2)}`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";
    

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }

  //(ALL COUNTRIES to GHANA) when amount to receive is entered
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount >= rate2 && receiveAmount <= ((rate2 * (1000000/2)) / 1000)) {
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    Amount to receive: GHS ${receiveAmount.toFixed(2)}
    Amount to send: ${roundUp(Math.round(amountToSend)).toLocaleString('fr-FR')} FCFA
    Transaction fee: ${Math.round(transactionFee2).toLocaleString('fr-FR')} FCFA
    Total: ${roundUp(Math.round((amountToSend + transactionFee2))).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
  }
}

document.getElementById("copyButton").addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  textArea.value = document.getElementById("resultMessage").innerText;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  document.getElementById("copyButton").textContent = "Copied"
  document.getElementById("copyButton").style.backgroundColor = "gray"

});


function contactSupport() {
  const phoneNumber = "233535060144";
  const message = "Hello. I intend to send an amount that exceeds your maximum limit";

  const WhatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(WhatsAppLink, '_blank');
}
