require('dotenv').config();

import {
    testRoute,
    testController
} from "./controllers";

const cors = require('cors');

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

var sampleInjectSvc = null;
var testCtl = new testController(sampleInjectSvc);
var testRoute1 = testRoute(express.Router(), app, testCtl);
app.use('/test', testRoute1);

app.listen(port, () => console.log('API server started on: ' + port));