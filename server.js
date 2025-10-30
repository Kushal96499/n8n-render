import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 5678;

// Run n8n
exec(`npx n8n start --tunnel`, (err, stdout, stderr) => {
  if (err) {
    console.error(`n8n failed: ${err.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});

app.get("/", (req, res) => {
  res.send("✅ n8n Render Server is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
