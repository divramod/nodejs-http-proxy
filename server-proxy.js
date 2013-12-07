var http = require('http')
, httpProxy = require('http-proxy');
 
httpProxy.createServer({
  hostnameOnly: true,
  router: {
    '...de': 'localhost:3001',
  }
}).listen(80);
