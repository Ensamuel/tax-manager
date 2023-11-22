let billNetPay = document.getElementById('bill-netpay');
let outputDiv
let inputField = document.getElementById('inputField');
let inputValue = parseFloat(inputField.value);
let nhf = document.getElementById('nhf');
let pension = document.getElementById('pension');
let nhis = document.getElementById('nhis');
let paye = document.getElementById('paye');





let addButton = document.getElementById('add-button')


addButton.addEventListener('click', function () {
    let newLine = document.createElement('h2')
    outputDiv.appendChild(newLine)
    newLine.textContent = inputValue
    billNetpay.innerText = newLine.innerText
    newLine.addEventListener('click', function () {
        newLine.innerHTML = ''
    })

    nhf.textContent = parseFloat(inputValue * 0.20833333333333334 / 100).toFixed(3);
    pension.textContent = parseFloat(inputValue * 0.6666666666666666 / 100).toFixed(3);
    nhis.textContent = parseFloat(inputValue * 0.4166666666666667 / 100).toFixed(3);
    if (inputValue <= 300000) {
        paye.textContent = parseFloat(inputValue * 0.5833333333333334 / 100).toFixed(3);
    } else if (inputValue <= 800000) {
        paye.textContent = parseFloat(inputValue * 0.9166666666666666 / 100).toFixed(3);
    } else if (inputValue <= 1300000) {
        paye.textContent = parseFloat(inputValue * 1.25 / 100).toFixed(3);
    } else if (inputValue <= 2900000) {
        paye.textContent = parseFloat(inputValue * 1.5833333333333333 / 100).toFixed(3);
    } else {
        paye.textContent = parseFloat(inputValue * 2 / 100).toFixed(3);
    }

})







let addNewBills = document.getElementById('add-new-bills')
let billNameInput = document.getElementById('bill-name-input')
let billAmountInput = document.getElementById('bill-amount-input')

let billNameValue = billNameInput.value
let billAmountInputValue = billAmountInput.value


let newBills = document.getElementById('new-bills')


let balanceAmount = document.getElementById('balance-am')

addNewBills.addEventListener('click', function addNewBills() {
   
    let billName = document.createElement('p')
    let billAmount = document.createElement('p')
    let deleteBtn = document.createElement('p')


    newBills.appendChild(billName)
    newBills.appendChild(billAmount)
    newBills.appendChild(deleteBtn)`<br/>`

    billName.textContent = billNameValue
    billAmount.textContent = billAmountInputValue
    deleteBtn.textContent = 'DELETE'

    deleteBtn.addEventListener('click', function () { 
        newBills.removeChild(newBillName)
        newBills.removeChild(newBillAmount)
       })

  
balanceAmount.innerText = parseFloat(billNetPay.textContent) - parseFloat(billAmount.textContent)

})


