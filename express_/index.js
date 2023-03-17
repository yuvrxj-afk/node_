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

const app = express();

app.set('view engine', 'ejs')
const publicPath = path.join(__dirname, 'public')

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/home', (req, res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/profile', (req, res) => {
    const user = {
        name: "uv",
        and: " hi "
    }
    res.render('profile', { user })
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`)
})

// app.use(express.static(publicPath))

app.listen(3000);
