///<reference path="typings/main.d.ts" />

import express = require("express");
var app = express();

app.listen(3000, ()=>{
    console.log("Started");
})

app.get('/about', (request, response)=>{
    response.end("Typescript Express Server")
} )