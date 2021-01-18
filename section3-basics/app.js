const http = require('http');



const server = http.createServer(((req, res) => {
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<head>enter message</head>')
        res.write('<body><form action="/message" method"POST"><input type="text"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>nao é a home</head>')
    res.write('</html>')
    res.end()
}));

server.listen(3001);