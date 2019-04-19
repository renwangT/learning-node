const fs = require('fs')

function home(response) {
    console.log("Executing 'home' handler")
    response.writeHead(200, {'Content-type': 'text/html'})
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response)
}

function review(response) {
    console.log("Executing 'review' handler")
    response.writeHead(200, {'Content-type': 'text/html'})
    fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response)
}

function api_recods(response) {
    console.log("Executing 'review' handler")
    response.writeHead(200, {'Content-type': 'application/json'})
    let sendInfo = {
        name: '张三',
        age: '18',
        job: 'doctor'
    }
    response.end(JSON.stringify(sendInfo))
}

module.exports = {
    home,
    review,
    api_recods
}