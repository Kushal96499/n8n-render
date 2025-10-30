import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;

// Run n8n when Render starts
app.get("/", (req, res) => {
  res.send("✅ n8n is running on Render!");
});

// Start n8n via system command
exec("npx n8n start", (err, stdout, stderr) => {
  if (err) {
    console.error("❌ n8n failed to start:", err);
    return;
  }
  console.log("🟢 n8n started successfully!");
  console.log(stdout);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
