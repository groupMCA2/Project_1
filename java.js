// script.js
document.getElementById("pay-button").addEventListener("click", function () {
    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
  
    // Simple validation
    if (cardNumber && cardHolder && expiryDate && cvv) {
      document.getElementById("payment-status").innerText = "Processing Payment...";
      
      // Simulate payment process
      setTimeout(() => {
        document.getElementById("payment-status").innerText = "Payment Successful!";
      }, 2000);
    } 
    else {
      document.getElementById("payment-status").innerText = "Please fill in all fields.";
    }
  });
  