// October 4, 2024
// Thesis in MongoDB
// Ally Berkowitz and Andrew Hadden

// Idea: have a set of keywords/all parameters on MongoDB or the website that allows us to 
//   have a dynamic set of bills -- would need to be connected to this script dynamically

import { MongoClient, ServerApiVersion } from "mongodb";
import fetch from "node-fetch";  // Import node-fetch to use fetch
// import cron from "node-cron"; // For scheduling the job

// MongoDB connection URI
const url = "mongodb+srv://aaberkow:allyandrew@thesis-cluster.l0s0s.mongodb.net/?retryWrites=true&w=majority&appName=Thesis-Cluster";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// Create 
let db;

const key = "hPjeYs0jDyrLw8iuE77Zi8srMdoVkbfDPYGKCr4D"; // our API key
const fromDate = "2021-01-01T00:00:00Z";
const toDate = "2024-09-22T00:00:00Z";
const sortOrder = "updateDate+asc";
const limit = 250;
let offset = 0;

// Compile regex patterns for each keyword to ensure whole-word matching
const keywords = [
    /\bmath\b/i,
    /\bmathematics\b/i,
    /\bstem workforce\b/i,
    /\bstem education\b/i,
    /\bmathematicians\b/i,
];

// Other keywords: 
// /\bstem\b/i
// /\bfunding to national science foundation\b/i
// /\bdirector of national science foundation\b/i
// /\boffice of personnel management \(hire more mathematicians\)\b/i
// /\bdepartment of education\b/i

// Connect to MongoDB and select the collection
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('ThesisDB');
        console.log('Database selected:', db.databaseName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Function to fetch and store Congress bills
async function fetchMathBills() {
    // Check if the database connection is established
    if (!db) {
        console.error('Database connection not established');
        return;
    }

    while (true) {
        const APIurl = `https://api.congress.gov/v3/summaries?fromDateTime=${fromDate}&toDateTime=${toDate}&sort=${sortOrder}&api_key=${key}&limit=${limit}&offset=${offset}`;
        
        console.log('API URL:', APIurl);
        console.log({ fromDate, toDate, sortOrder, key, limit, offset });

        try {
            const response = await fetch(APIurl);
            if (!response.ok) {
                throw new Error(`HTTP error: status: ${response.status}`);
            }
            
            const data = await response.json();

            // Iterate over the data and check for keywords
            for (const bill of data.summaries || []) {
                const title = (bill.bill?.title || '').toLowerCase();
                const summary = (bill.text || '').toLowerCase();
                const congressYr = bill.bill?.congress || 'N/A';
                
                // Check if any keywords are matched
                const foundKeywords = keywords.some(kw => kw.test(title) || kw.test(summary));
                console.log('Bill:', bill);
                console.log('Keywords Matched:', foundKeywords);
                if (foundKeywords && parseInt(congressYr) > 116) {
                    // Insert into MongoDB
                    await db.collection('ThesisDBCollection').insertOne({
                        bill,
                        keywordsMatched: foundKeywords
                    });
                    console.log(`Stored bill ${congressYr}: ${title}`);
                }
            }

            // Increment offset for pagination
            offset += limit;

            // Break if no more bills are available
            if (!data.summaries || data.summaries.length === 0) {
                console.log('No more bills available.');
                break;
            }
        } catch (error) {
            console.error('Error fetching or storing Congress data:', error);
            break;
        }
    }
}

// // Function to start the process every 24 hours (can be adjusted)
// cron.schedule('0 0 * * *', async () => {
//     console.log('Fetching Congress data...');
//     await fetchMathBills();
// });

// Main process to connect to MongoDB and fetch data
async function mainProcess() {
    try {
        await connectToMongoDB();
        console.log('Ready to fetch data.');
        await fetchMathBills();  // Ensure fetchMathBills is awaited
        console.log('Fetching completed.');
    } catch (error) {
        console.error('Error during initial connection or fetch:', error);
    } finally {
        // Close the MongoDB client after everything completes
        console.log('Closing MongoDB connection.');
        await client.close();
    }
}

// Start the main process
mainProcess();