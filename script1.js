function maskAadhaar() {
    const input = document.getElementById('aadhaarInput').value;
    const output = document.getElementById('maskedOutput');
  
    if (input.length !== 12 || isNaN(input)) {
      output.textContent = "Please enter a valid 12-digit Aadhaar number.";
      output.style.color = 'red';
      return;
    }
  
    const last4 = input.slice(-4);
    const masked = '*********' + last4;
    output.textContent = `Masked Aadhaar: ${masked}`;
    output.style.color = 'black';
  }