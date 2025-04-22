
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('error-msg');
  
    
    errorMsg.textContent = '';
  
 
    if (name === '' || email === '' || message === '') {
      errorMsg.textContent = 'Please fill in all fields.';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMsg.textContent = 'Please enter a valid email address.';
      return;
    }
  
   
    alert('Form submitted successfully!');
    this.reset(); 
  });
  
  function validateEmail(email) {
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  