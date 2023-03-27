const express = require('express')
const quotes = require('./quotes')
const app = express()

app.use(express.static('public'))

app.get('/getquote',(req,res) => {
    res.send(quotes[Math.floor(Math.random()*quotes.length)])
})

app.get('/getimage',(req,res) => {
    res.sendFile(`${__dirname}/sandwiches/${Math.floor(Math.random()*21)}.jpeg`)
})

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`listening on ${port}`))