const exchangeRate = 1000; 

function convertToNaira() {
   
    const dollars = document.getElementById('dollars').value;
    
    const naira = dollars * exchangeRate;
    
    document.getElementById('result').innerText = `${dollars} USD is equivalent to ${naira.toFixed(2)} NGN.`;
}
