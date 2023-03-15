const http = require('http')

// handles req and res for server in nodejs

http.createServer((req, res) => {
    res.write("Hello")
    res.end();
    console.log("running");
}).listen(4000);
