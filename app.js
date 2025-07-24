const express = require("express");
const app = express();
const translate = require("google-translate-api-x");
const path = require("path");

app.use(express.static("public"));
app.use(express.json());

app.post("/api/translate", async (req, res) => {
  const { text, toLang } = req.body;
  try {
    const result = await translate(text, { to: toLang });
    res.json({ translatedText: result.text });
  } catch (err) {
    res.status(500).json({ error: "Translation failed." });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
