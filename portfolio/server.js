const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'port.html'));
});

app.listen(port, () => {
    console.log(`Portfolio is running at http://localhost:${port}`);
}); 