// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// app config
app.config = {
  port: 9090,
};

// server create
app.createServer = () => {
  const server = http.createServer(app.handlerReqRes);
  server.listen(app.config.port, () => {
    console.log(`Start server with ${app.config.port} port`);
  });
};

// handler request response
app.handlerReqRes = (req, res) => {
  const apiMethod = req.method;
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  const queryObject = parsedUrl.query;
  const apiHeaders = req.headers;
  const decoder = new StringDecoder('utf-8');
  let reqBody = '';

  req.on('data', (buffer) => {
    reqBody += decoder.write(buffer);
    console.log(reqBody);
  });

  console.log(apiMethod);
  console.log(req.url);
  console.log(pathName);
  console.log(queryObject);
  console.log(apiHeaders);

  res.end('Success');
};

app.createServer();
