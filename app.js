function callRenderAPI() {
  fetch('https://render.com/docs/web-services#port-binding')  // Replace with your actual API
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').innerText = data.message || 'Success!';
    })
    .catch(error => {
      document.getElementById('output').innerText = 'Error: ' + error.message;
    });
}
