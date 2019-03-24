const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')


app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "exercise1.html"));
});


app.get("/web13", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web13.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web14", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web14.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web15", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web15.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web16", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web16.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web17", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web17.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web18", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web18.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web19", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web19.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.get("/web20", function(req, res){
    let li = "";
    let data = fs.readFileSync(path.resolve(__dirname, "../hw_session 3/data/web20.json"));
    let datalist = JSON.parse(data);
    for (var i = 0; i < datalist.length; i++ ) {
        li += "<li>" + datalist[i] + "</li>";
    };
    res.send("<ul>" + li + "</ul>" )
});

app.listen(3003, function(err) {
    if(err) console.log(err);
    else console.log("Sever start success !!");
});