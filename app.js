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

// Create a 404 error
app.use((req, res, next) => {
    const err = new Error('Oh no! The page does not exist.');
    err.status = 404;
    next(err);
});

// Handle errors
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(err.status).render('page-not-found', {err});
    } else {
        err.message = 'Oh no! Something\'s wrong with the server.';
        err.status = 500;
        res.status(err.status).render('error', {err});
    }
});

// Set up server
app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});