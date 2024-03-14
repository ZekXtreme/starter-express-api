const express = require('express')
const app = express()

const RED_URL = process.env.RED_URL || "https://www.google.com/"

app.all('/', (req, res) => {
    console.log("Just got a request!");
    res.redirect(RED_URL);
})
app.listen(process.env.PORT || 3000)
