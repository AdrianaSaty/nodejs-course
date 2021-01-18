const http = require('http');



const server = http.createServer(((req, res) => {
    console.log('req',req.url)
    console.log('method',req.method)
    console.log('headers',req.headers)
    // process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>hiii</head>')
    res.write('</html>')
    res.end()
}));

server.listen(3001);