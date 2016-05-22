///<reference path="typings/main.d.ts" />

import express = require("express");
var app = express();

var port = parseInt(process.env.PORT, 10) || 8080;
app.listen(port, ()=>{
    console.log("Started");
})

app.get('/', (request, response)=>{
    response.end("Typescript Express Server")
} )
