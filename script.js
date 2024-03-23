
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('popup').style.display = 'block';
    document.getElementById('appointmentForm').reset();
    setTimeout(function() {
      document.getElementById('popup').style.display = 'none';
    }, 3000); 
  });

  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('separatePopup')) {
      document.getElementById('separatePopup').style.display = 'none';
    }
  });

  function signUp() {
    // Retrieve username and password from input fields
    var username = document.getElementById('signUpUsername').value;
    var password = document.getElementById('signUpPassword').value;
    
    // Perform any necessary validation here
    
    // Redirect the user to index.html
    window.location.href = 'index.html';
}