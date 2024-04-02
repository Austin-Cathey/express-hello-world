const express = require('express');
const port = 3000;
const morgan = require('morgan');

const app = express();

app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/hello/", (req, res) => {
    res.json({message: "Hello World!"})
})

//:placeholder begins with :.....
app.get("/hello/:name", (req, res) => {
    console.log(req.params)
    res.json({message: `Hello, ${req.params.name}!`})
})

app.listen(port, () => {console.log(`Server is running on port ${port}`) })