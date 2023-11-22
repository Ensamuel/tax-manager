let billNetPay = document.getElementById('bill-netpay');
let outputDiv
function displayInput() {
    // Get the input field value
   let inputField = document.getElementById('inputField');
   let inputValue = parseFloat(inputField.value);
    
  
    
    let nhf = document.getElementById('nhf');
    let pension = document.getElementById('pension');
    let nhis = document.getElementById('nhis');
    let paye = document.getElementById('paye');

    nhf.textContent = parseFloat(inputValue*0.20833333333333334/100).toFixed(3);
    pension.textContent = parseFloat(inputValue*0.6666666666666666/100).toFixed(3);
    nhis.textContent = parseFloat(inputValue*0.4166666666666667/100).toFixed(3);
    if(inputValue<=300000){
      paye.textContent = parseFloat(inputValue*0.5833333333333334/100).toFixed(3);
    }else if(inputValue<=800000){
      paye.textContent = parseFloat(inputValue*0.9166666666666666/100).toFixed(3);
    }else if(inputValue<=1300000){
      paye.textContent = parseFloat(inputValue*1.25/100).toFixed(3);
    }else if(inputValue <=2900000){
      paye.textContent = parseFloat(inputValue*1.5833333333333333/100).toFixed(3);
    }else{
      paye.textContent = parseFloat(inputValue*2/100).toFixed(3);
    }


    // Get the output div where you want to display the input content
   outputDiv = document.getElementById('outputDiv');
  
   
   // Display the input value in the output div
   outputDiv.textContent = 
   //parseFloat(inputValue)-parseFloat(nhf.textContent)-parseFloat(pension.textContent)-parseFloat(nhis)-parseFloat(paye);
   parseFloat(inputValue).toFixed(3)-parseFloat(nhf.textContent).toFixed(3)-parseFloat(pension.textContent).toFixed(3)-parseFloat(nhis.textContent)-parseFloat(paye.textContent);

    
    billNetPay.textContent = outputDiv.textContent;


    
  }



  


let balanceAmount = document.getElementById('balance-am')



let billsName = document.getElementById('bill_name')
let billsAmount = document.getElementById('bill_amount1')

billsAmount.addEventListener('keypress',function(e){
  if(e.key === 'Enter' ){
    
    balanceAmount.textContent = parseFloat(billNetPay.textContent)-parseFloat(billsAmount.value)
    
  }
  
} )
let deleteBtn = document.getElementById('deleteBtn')

deleteBtn.addEventListener('click', function(){
  balanceAmount.textContent = parseFloat(balanceAmount.textContent)+parseFloat(billsAmount.value)
  billsAmount.value = ''
})




let billsName2 = document.getElementById('bill_name2')
let billsAmount2 = document.getElementById('bill_amount2')

billsAmount2.addEventListener('keypress',function(e){
  if(e.key === 'Enter' ){
    
    balanceAmount.textContent = parseFloat(balanceAmount.textContent)-parseFloat(billsAmount2.value)
    
  }
  
} )

let deleteBtn2 = document.getElementById('deleteBtn2')

deleteBtn2.addEventListener('click', function(){
  balanceAmount.textContent = parseFloat(balanceAmount.textContent)+parseFloat(billsAmount2.value)
  billsAmount2.value = ''
})










