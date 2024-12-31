// filepath: /Users/shotaruo/personal-website/backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit-email', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const filePath = path.join(__dirname, 'emails.txt');
    fs.appendFile(filePath, `${email}\n`, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save email' });
        }
        res.status(200).json({ message: 'Email saved successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});