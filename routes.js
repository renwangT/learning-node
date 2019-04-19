const fs = require('fs')

function router(handle, pathname, response) {
    console.log('Routing a request for' + pathname)
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response)
    } else {
        console.log("No handler for " + pathname)
        response.writeHead(200, {'Content-type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response)
    }
}

module.exports = {
    router
}