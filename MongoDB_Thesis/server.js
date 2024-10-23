// Express, Mongoose code to connect the database to the website

// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Allow cross-origin requests -- maybe unnecessary?
import path from 'path'; // Module for handling file paths -- confused
import { fileURLToPath } from 'url'; // Import method to handle URL paths
import { dirname } from 'path'; // Import dirname to get directory name


// Get the current directory of the module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // Get the directory name

const app = express(); // need
const port = 3001; // or any port

// Serve static files from the 'website' directory
app.use(express.static(path.join(__dirname, '../website')));

app.use(cors());  // Allow all origins

// Connect to MongoDB
async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://aaberkow:allyandrew@thesis-cluster.l0s0s.mongodb.net/ThesisDB?retryWrites=true&w=majority&appName=Thesis-Cluster');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
    }
}

// Define a Mongoose schema and model
const collection_structure = new mongoose.Schema({
    bill: {
        actionDate: String,
        actionDesc: String,
        bill: {
            congress: Number,
            number: String,
            originChamber: String,
            originChamberCode: String,
            title: String,
            type: String,
            updateDateIncludingText: String,
            url: String},
        currentChamber: String,
        currentChamberCode: String,
        lastSummaryUpdateDate: String,
        text: String,
        updateDate: String,
        versionCode: String,
    },
    keywordsMatched: [String],
});

const collections = mongoose.model("thesisdbcollections", collection_structure)

console.log(collections);

// Route to data from the MongoDB collection
app.get('/data', async (req, res) => {
  try {
    const data = await collections.find();  // Fetch all documents from collection
    if (!data || data.length === 0) {
        return res.status(404).json({ message: 'No data found' });
    }
    console.log('Fetched Data:', data);
    res.json(data);  // Send the data as JSON response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connectToDB();