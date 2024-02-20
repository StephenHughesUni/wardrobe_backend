// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai'); // Assuming you're using OpenAI's API

// Create an instance of Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define API endpoint to receive OCR data
app.post('/process-ocr', (req, res) => {
    // Extract OCR data from request body
    const ocrData = req.body;

    // Perform processing and categorization using OpenAI API
    // Example: Assume openai.categorizeText() is a function to categorize text using OpenAI API
    openai.categorizeText(ocrData.text, (err, categorizedData) => {
        if (err) {
            console.error('Error categorizing text:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Send categorized data as response
            res.json(categorizedData);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
