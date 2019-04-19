const server = require('./server')
const {router} = require('./routes')
const {home, review, api_recods} = require('./handler')

let handle = {}
handle["/"] = home;
handle['/home'] = home;
handle['/review'] = review;
handle['/api/v1/recodes'] = api_recods;

server.startServer(router, handle)