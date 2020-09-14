'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Hello World Server
// Create an Express App with a route at / that returns "Hello World."

const rootController = (req, res) => {
    res
        .status(200)
        .send(`<h1>Hello World!</h1>`)
        .end();
};


// Add Routes
// Create an Express app with the following routes:

// Route / that returns the string "Hello World!"
// Route /cats that returns the string "Meow!"
// Route /dogs that returns the string "Woof!"
// Route /cats_and_dogs that returns the string "Dogs and cats living together...mass hysteria!!"
const catController = (req, res) => {
    res
        .status(200)
        .send(`<h1>Meow!</h1>`)
        .end();
};

const dogController = (req, res) => {
    res
        .status(200)
        .send(`<h1>Woof!</h1>`)
        .end();
};

const catDogController = (req, res) => {
    res
        .status(200)
        .send(`<h1>Dogs and cats living together ... mass hysteria!!</h1>`)
        .end();
};

app.get(`/`, rootController); 
app.get(`/cats`, catController);
app.get(`/dogs`, dogController);
app.get(`/cats_and_dogs`, catDogController);

// Add Routes with Parameters
// Create an Express app with a route /greet that returns the following:

// Route /greet/Luke would return "Hello, Luke!"
// Route /greet/Ahsoka would return "Hello, Ahsoka!"
// Route /greet/Han would return "Hello, Han!"
// etc...

app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`<h1>Hello, ${handle}!</h1>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


