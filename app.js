'use strict';
const express = require('express');
var liveServer = require('live-server');

const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile('./index.html');
});

liveServer.start({
  port: 3001,
  host: "127.0.0.1",
  root: "docs"
  });

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
