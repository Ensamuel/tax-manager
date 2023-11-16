let grossSalary = document.getElementById('gross-salary');
let addButton = document.getElementById('add-button');
let nhf = document.getElementById('nhf');
let netPay = document.getElementById('netpay')


grossSalary.addEventListener('input', addInput)

function(){
    netPay.textContent = grossSalary.value
}

