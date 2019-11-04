import server from './server';
import serverMock from './server.mock';

const isDevelopment = false;

let serveApi = {};

if (!isDevelopment) {
  serveApi = new server();
} else {
  serveApi = new serverMock();
}

export default serveApi;
