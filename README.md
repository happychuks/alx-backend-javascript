# Introduction to JavaScript for Backend Development

JavaScript, originally designed for front-end development, has evolved to become a powerful language for backend development as well. With the advent of Node.js, JavaScript can now be used to build scalable and efficient server-side applications.

## Table of Contents
- [Overview](#overview)
- [Why Use JavaScript for Backend](#why-use-javascript-for-backend)
- [Node.js](#nodejs)
- [Installing Node.js](#installing-nodejs)
- [Creating a Simple Server](#creating-a-simple-server)
- [Express.js](#expressjs)
- [Connecting to a Database](#connecting-to-a-database)
- [Conclusion](#conclusion)

## Overview
JavaScript is a versatile language that allows you to use the same language for both front-end and back-end development. This unification simplifies the development process and enhances code reusability.

## Why Use JavaScript for Backend
- **Single Language**: Use JavaScript for both client and server sides.
- **Event-Driven**: JavaScript is well-suited for I/O-heavy operations.
- **Large Ecosystem**: Rich set of libraries and frameworks available through npm.
- **Community Support**: Large and active community providing continuous improvements and support.

## Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables JavaScript to be run on the server side, making it possible to build scalable and high-performance applications.

## Installing Node.js
To start using Node.js, you need to install it on your system.

1. Download the installer from [Node.js official website](https://nodejs.org/).
2. Follow the installation instructions for your operating system.
3. Verify the installation by running:
    ```bash
    node -v
    npm -v
    ```

## Creating a Simple Server
With Node.js installed, you can create a simple server.

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```
Run server with `node server.js`.

## Express.js

Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.

### Installing Express.js

Install Express.js using npm: `npm install express`.

### Creating an Express Server

```javascript
// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

Run server with ` node app.js`


## Connecting to Database

JavaScript can connect to various databases using different libraries. For example, to connect to MongoDB, you can use the Mongoose library.

### Installing Mongoose

Install Mongoose using npm: `npm install mongoose`.

### Connecting to MongoDB

```javascript
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// app.js
const express = require('express');
const connectDB = require('./db');
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

## Conclusion

JavaScript, with the power of Node.js and various frameworks like Express, has become a robust choice for backend development. Its unified language environment and rich ecosystem make it an attractive option for developers looking to build scalable and efficient server-side applications.


