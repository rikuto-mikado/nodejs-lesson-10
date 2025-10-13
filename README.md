# Node.js Lesson 10

## What I Learned
- How to use `app.use()` to register middleware in Express
- Specifying `'/'` as the path makes middleware execute for all incoming requests
- The `next()` function passes control to the next middleware in the chain
- When to call `next()`: when you want to continue processing without sending a response
- When NOT to call `next()`: if you've already sent a response with `res.send()`, `res.json()`, etc.
- Middleware executes in the order they are registered

## What Was Challenging
- Understanding when to use `next()` vs when to send a response
- Grasping the concept of middleware chaining and execution order
- Knowing which middleware should call `next()` and which should terminate the request
