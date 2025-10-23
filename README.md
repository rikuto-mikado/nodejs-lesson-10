# Node.js Lesson 10

## Project Overview
A simple Express.js application demonstrating middleware usage and form handling with body-parser.

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.1.0 | Web application framework |
| body-parser | ^2.2.0 | Middleware to parse incoming request bodies |
| nodemon | ^3.1.10 | Auto-restart server during development |

## Scripts

```bash
npm start       # Start the server (production)
npm run dev     # Start with nodemon (development)
```

## Routes

| Path | Method | Description |
|------|--------|-------------|
| `/` | GET | Display welcome message |
| `/add-product` | GET | Show form to add a product |
| `/product` | POST | Handle form submission and redirect |

## What I Learned
- How to use `app.use()` to register middleware in Express
- Using `body-parser` to parse form data from POST requests
  - `bodyParser.urlencoded({ extended: false })` parses URL-encoded bodies
  - Access parsed data via `req.body`
- Specifying `'/'` as the path makes middleware execute for all incoming requests
- The `next()` function passes control to the next middleware in the chain
- When to call `next()`: when you want to continue processing without sending a response
- When NOT to call `next()`: if you've already sent a response with `res.send()`, `res.json()`, etc.
- Middleware executes in the order they are registered
- How to handle form submissions and redirects

## Code Example

```javascript
// Parse URL-encoded bodies (form data)
app.use(bodyParser.urlencoded({ extended: false }));

// Display form
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Handle form submission
app.use('/product', (req, res, next) => {
    console.log(req.body); // Access form data
    res.redirect('/');
});
```

## What Was Challenging
- Understanding when to use `next()` vs when to send a response
- Grasping the concept of middleware chaining and execution order
- Knowing which middleware should call `next()` and which should terminate the request
- Remembering correct HTML attribute spelling (`method` not `mothod`)
