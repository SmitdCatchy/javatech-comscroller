// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const favicon = require('serve-favicon');
// APP
const app = express();
// mySQL connection
const mysql = require('mysql');
const connection = require('express-myconnection');
app.use(connection(mysql,{
  host: "",
  user: "",
  password: "",
  database: ""
}, 'request'));
// favicon setup
app.use(favicon(path.join(__dirname, 'dist/media/images', 'cms_logo.png')));

// CORS - for testing
const cors=require('cors');
app.use(cors());

// PARSERS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// Angular DIST
app.use(express.static(path.join(__dirname, 'dist')));
// ROUTES
const api = require('./server/routes/api');
app.use('/api', api);
// Send all other requests to Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// Setting the port
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`#API COMSCROLLER is running on localhost:${port}`));
