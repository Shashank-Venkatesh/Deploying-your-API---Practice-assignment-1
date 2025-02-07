// Importing required modules
const express = require('express'); // Express framework for building the server
const data = require('./data.json'); // Importing student data from an external JSON file

const app = express();   
const port = 3000;

app.use(express.json()); // Middleware to parse incoming JSON requests


const students = data; 

// Define a basic route to check if the server is running
app.get('/', (req, res) => {
    res.send("Hello World"); // Responds with "Hello World" when accessed at the root URL
});

// Endpoint to get students with total marks above a given threshold
app.post('/students/above-threshold', (req, res) => {
    const threshold = req.body.threshold; // Extracting the threshold value from the request body

    // Validate threshold value (should be a non-negative number)
    if (typeof threshold !== 'number' || threshold < 0) {
        return res.status(400).json({ error: 'Invalid threshold value' }); // Return error response for invalid input
    }

    // Filter students who have total marks greater than the threshold
    const filteredStudents = students.filter(student => student.total > threshold);

    // Prepare response with count and filtered student data
    const response = {
        count: filteredStudents.length, // Total number of students above threshold
        students: filteredStudents.map(student => ({
            name: student.name, // Student's name
            total: student.total // Student's total marks
        }))
    };

    res.json(response); // Send the filtered student data as JSON response
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); 
});
