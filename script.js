document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
  
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
   
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const { isValid, messages } = validateInputs(username, email, password);

      displayFeedback(isValid, messages, feedbackDiv);
    });
  
    function validateInputs(username, email, password) {
      let isValid = true;
      const messages = [];

      if (!isValidUsername(username)) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }
  
      if (!isValidEmail(email)) {
        isValid = false;
        messages.push("Please enter a valid email address.");
      }
  
      if (!isValidPassword(password)) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
      }
  
      return { isValid, messages };
    }
  
    function isValidUsername(username) {
      return username.length >= 3;
    }
  
    function isValidEmail(email) {
      return email.includes("@") && email.includes(".");
    }
  
    function isValidPassword(password) {
      return password.length >= 8;
    }
  
    function displayFeedback(isValid, messages, feedbackDiv) {
      feedbackDiv.style.display = "block";
      if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; 
      } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; 
      }
    }
  });
  