import server       from './server'
import serverMock   from './server.mock'

let isDevelopment = true

let serveApi = {};

if(!isDevelopment){
    serveApi = new server();
}
else {
    serveApi = new serverMock();
}

export default serveApi;