const http = require('http');
const app = require('./app');

var port = process.env.PORT || 8888; 

var server = http.createServer(app);


server.listen(port, () => {
    console.log('~~~~your thing is working at '+port+'~~~~~~~~~')
});