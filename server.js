const http = require('http')

function startServer(router, handle) {
    const server = http.createServer((request, response) => {
        router(handle, request.url, response)
        console.log('Request received' + request.url);
        // if(request.url === '/' || request.url === '/home') {
        //     
        // } else if(request.url == '/review') {
            
        // } else if(request.url === '/api/v1/recodes') {
        //     response.writeHead(200, {'Content-type': 'application/json'})
        //     let sendInfo = {
        //         name: '张三',
        //         age: '18',
        //         job: 'doctor'
        //     }
        //     response.end(JSON.stringify(sendInfo))
        // } else {
        //     response.writeHead(200, {'Content-type': 'text/html'})
        //     fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response)
        // }
        // response.writeHead(200, {'Content-type': 'text/plain'})
        // let sendInfo = {
        //     name: '张三',
        //     age: '18',
        //     job: 'doctor'
        // }
        // let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
        // response.end('hello form out application')
        // response.end(JSON.stringify(sendInfo))
        // myReadStream.pipe(response)
    })
    server.listen(3000)
    console.log('Server started on localhost port 3000')
}

module.exports.startServer = startServer