import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("🚀 n8n Render Server Running Successfully!");
});

// Start n8n in background process
exec("npx n8n start", (err, stdout, stderr) => {
  if (err) {
    console.error("❌ n8n failed to start:", err);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});

app.listen(PORT, () => {
  console.log(`🌍 Server running on port ${PORT}`);
});
