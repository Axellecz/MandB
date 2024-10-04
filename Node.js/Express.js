const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/validate-password', (req, res) => {
  const { password, id } = req.body;

  // Password verification logic
  if (password === "new21") {
    // Based on the thumbnail ID, return the correct URL
    let redirectUrl = '';
    if (id === "1") {
      redirectUrl = "https://mega.nz/folder/IOtnwZyB#H-rzZG39l2GBHLpnZmoJCA";
    } else if (id === "2") {
      redirectUrl = "https://mega.nz/folder/example1#abc123";
    }

    res.json({ success: true, redirectUrl: redirectUrl });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
