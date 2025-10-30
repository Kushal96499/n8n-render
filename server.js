const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('🚀 n8n server is starting...');
});

// Start n8n in background
exec('n8n start', (err, stdout, stderr) => {
  if (err) {
    console.error('❌ n8n failed to start:', err);
    return;
  }
  console.log('✅ n8n started successfully');
});

app.listen(port, () => {
  console.log(`🌍 Server running on port ${port}`);
});
