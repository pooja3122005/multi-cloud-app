const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Render backend (server.js)' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
