var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.post('/create', function(req, res){
  //var x = {"title": "first task", "due_date": "05/14/18", "description": "insert this task into mongodb"};
  if(req.body.session_token == "!QAZ@WSX#EDC1qaz2wsx3edc") {
    let task = {"title": req.body.title, "due_date": req.body.due_date, "description": req.body.description}
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WindowsPersonalAssistant");
        dbo.collection("tasks").insertOne(task, function(err, mongoRes) {
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
        dbo.collection("tasks").find({}).sort({due_date: 1}).toArray(function(err, result){
          if (err) throw err;
          db.close();
          res.send(JSON.stringify(result));
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
        dbo.collection("tasks").update(query, newValue, function(err, mongoRes){
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
        dbo.collection("tasks").deleteOne(query);
        db.close();
        res.sendStatus(200);
    });
  } else {
    res.sendStatus(401);
  }
});

//Returns the router as a useable variable
module.exports = router;
