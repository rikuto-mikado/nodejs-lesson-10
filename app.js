const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!!');
    // next() passes control to the next middleware in the chain
    // Use it when you want to continue processing (not sending a response here)
    // Don't call it if you've already sent a response with res.send(), res.json(), etc.
    next();
})

// Specifying '/' as the path makes this middleware execute for all incoming requests
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!!')
    res.send('<h1>This is "add-product" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the middleware!!')
    res.send('<h1>Hello from Express!!</h1>');
});

app.listen(3000);