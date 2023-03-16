const express = require('express')

const app = express();
app.use(express.json())

app.get("/home", (req, res) => {
    console.log(req.query.name);
    res.send("This is home page")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.get('', (req, res) => {
    res.send("This is no page")
})


app.listen(3000);