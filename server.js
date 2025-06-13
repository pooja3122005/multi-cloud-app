const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow CORS for frontend requests

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Render!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
