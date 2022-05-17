// Require Express
const express = require('express');

// Create an Express app
const app = express();

// Set view engine
app.set('view engine', 'pug');

// Serve static files
app.use('/static', express.static('public'));

// Import and pass in routes
const routes = require('./routes/routes');
app.use(routes);

// Handle errors


// Set up server
app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});