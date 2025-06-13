function callRenderAPI() {
  fetch('https://your-render-backend-url.com/api')  // Replace with your actual API
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').innerText = data.message || 'Success!';
    })
    .catch(error => {
      document.getElementById('output').innerText = 'Error: ' + error.message;
    });
}
