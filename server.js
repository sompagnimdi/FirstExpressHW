// Require modules
const express = require('express')
const app = express()


// Create our express app

app.get('/greeting', (req, res) => {
    res.status(200).json('Hello, Stranger')
})

app.get('/greeting/Arthur', (req, res) => {
    res.status(200).json('Hello, Arthur')
})



// create a listening port 
app.listen(800, () => {
    console.log('I am listening to all requests now on port 800')
})




