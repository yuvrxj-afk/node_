const express = require('express')
const path = require('path')
// app.use(express.json())

// app.get("/home", (req, res) => {
//     console.log(req.query.name);
//     res.send("This is home page")
// })

// app.get('/about', (req, res) => {
//     res.send("This is about page")
// })

// app.get('', (req, res) => {
//     res.send("This is no page")
// })

const app = express();

const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))

app.listen(3000);
