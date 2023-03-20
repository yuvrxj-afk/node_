const express = require("express")

const app = express();

const reqFilter = (req, res, next) => {
    console.log('reqFilter');
    if (!req.query.age) {
        res.send("Provide age")
    }
    else{
        if(req.query.age < 18){
            res.send('Not allowed')
        }
    }
    next();
}

// app.use(reqFilter)

app.get('', (req, res) => {
    res.send("hissi?")
})

app.get('/users',reqFilter, (req, res) => {
    res.send("hi users?")
})

app.get('/about', (req, res) => {
    res.send("hi about?")
})

app.listen(5000);
