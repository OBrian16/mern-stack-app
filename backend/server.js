const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//configure bodyParser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('This is MERN');
});

// server
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}.');
});