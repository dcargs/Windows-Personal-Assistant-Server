var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.post('/create', function(req, res){
  //var x = {"title": "first event", "date": "05/14/18"};
  if(req.body.session_token == "!QAZ@WSX#EDC1qaz2wsx3edc") {
    let event = JSON.parse(req.body.event);
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WindowsPersonalAssistant");
        dbo.collection("events").insertOne(event, function(err, mongoRes) {
          if (err) throw err;
          db.close();
          res.sendStatus(200);
        });
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/get', function(req, res){
  if(req.body.session_token == "!QAZ@WSX#EDC1qaz2wsx3edc") {
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WindowsPersonalAssistant");
        dbo.collection("events").find({}).toArray(function(err, result){
          if (err) throw err;
          db.close();
          res.send(result);
        });
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/edit', function(req, res){
  if(req.body.session_token == "!QAZ@WSX#EDC1qaz2wsx3edc") {
    let query = { _id: ObjectID(req.body.id) };
    let newValue = JSON.parse(req.body.newValue);
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WindowsPersonalAssistant");
        dbo.collection("events").update(query, newValue, function(err, mongoRes){
          if (err) throw err;
          db.close();
          res.sendStatus(200);
        });
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/delete', function(req, res){
  if(req.body.session_token == "!QAZ@WSX#EDC1qaz2wsx3edc") {
    let query = { _id: ObjectID(req.body.id) };
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WindowsPersonalAssistant");
        dbo.collection("events").deleteOne(query);
        db.close();
        res.sendStatus(200);
    });
  } else {
    res.sendStatus(401);
  }
});

//Returns the router as a useable variable
module.exports = router;
