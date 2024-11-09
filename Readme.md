## What is express.js?

Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications, allowing developers to create server-side applications with ease. Express is known for its simplicity and flexibility, making it one of the most popular frameworks for Node.js.

### Key Features of Express.js:

1. Middleware Support: Express uses middleware functions to handle requests. Middleware can perform various tasks, such as logging, authentication, and parsing request bodies.

2. Routing: Express provides a powerful routing mechanism that allows you to define routes for handling different HTTP methods and paths.

3. Template Engines: Express supports various template engines (like Pug, EJS, Handlebars) for rendering dynamic HTML pages.

4. Static Files: It can serve static files, such as images, CSS, and JavaScript, which are essential for web applications.

5. Error Handling: Express has a built-in error handling mechanism, which makes it easier to manage errors in your application.

6. RESTful API Support: Express is often used to build RESTful APIs, allowing for the creation of robust back-end services.

7. Integration with Databases: It can easily integrate with various databases (like MongoDB, MySQL, PostgreSQL) through various ORMs and database drivers.

### Basic Example of an Express.js Application:
Here's a simple example of an Express.js application:

```
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## What is body-parser?

Body-parser is a Node.js middleware that parses incoming HTTP request bodies and makes them available as objects in the req.body property. It's useful for handling data submitted through HTML forms, JSON data, and other formats. 
 
Here are some benefits of using body-parser:
### Simplifies data parsing
Body-parser abstracts the complexity of data parsing, allowing you to focus on the logic of your application. 
 
### Useful for POST, PATCH, or PUT requests
Body-parser is especially useful when you need to know more than just the URL being hit, such as when the information you want is contained in the body of a POST, PATCH, or PUT request. 
 
### Avoids manual data handling
Without body-parser, you would need to manually handle the incoming data streams, which can be cumbersome and error-prone

## what does `{extended:false}` do in this code 
```app.use(bodyParser.urlencoded({extended:false}))``` ?

The extended: false option in app.use(bodyParser.urlencoded({ extended: false })) determines how URL-encoded form data is parsed by Express:

### extended: false: 
Uses the querystring library to parse URL-encoded data, allowing simple key-value pairs only. This is sufficient for parsing simple form submissions, where data does not include nested objects.

### extended: true:
 Uses the qs library, enabling more complex, nested objects to be parsed, similar to JSON-like structures.

`Setting extended: false is appropriate if the form data is simple, as it requires less processing and keeps the data structure straightforward. `

## What is REST(Representational State Transfer) API?

REST is an api that defines a set of functions that programmers can use to send requests and receive responses using the HTTP protocol methods such as GET and POST.