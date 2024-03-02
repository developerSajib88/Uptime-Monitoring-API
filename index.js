// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// app config
app.config = {
  port: 9090,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server start with ${app.config.port} port`);
  });
};

// handle request resoponse
app.handleReqRes = (req, res) => {
  res.end('hello World');
};

// start server
app.createServer();
