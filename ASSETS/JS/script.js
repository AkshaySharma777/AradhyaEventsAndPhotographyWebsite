// Form submission
const detailsForm = document.getElementById('detailsForm');

detailsForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieve form field values
  const fullname = document.getElementById('fullname').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const purpose = document.getElementById('purpose').value;

  // Perform desired actions with the form data
  // This could include saving to a database, sending emails, etc.

  // Validate the mobile number
  if (mobile.length !== 10 || isNaN(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }
    // Validate the email address
      // Validate the email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

  // Example action: Redirect to a new page
  window.location.href = "mainPage.html";
});
