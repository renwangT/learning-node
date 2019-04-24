const server = require('./server')
const {router} = require('./routes')
const {home, review, api_recods, api_upload} = require('./handler')

let handle = {}
handle["/"] = home;
handle['/home'] = home;
handle['/review'] = review;
handle['/api/v1/recodes'] = api_recods;
handle['/api/v1/upload'] = api_upload;

server.startServer(router, handle)