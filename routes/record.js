const express = require("express");
 

const recordRoutes = express.Router();
 

const dbo = require("../db/conn");
 

const ObjectId = require("mongodb").ObjectId;
 
 

recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("football");
 db_connect
   .collection("cfb")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("cfb")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   Year: req.body.Year,
   Name: req.body.Name,
   School: req.body.School,
   Position: req.body.Position,
 };
 db_connect.collection("cfb").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     Year: req.body.Year,
     Name: req.body.Name,
     School: req.body.School,
     Position: req.body.Position,
   },
 };
 db_connect
   .collection("cfb")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 

recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("cfb").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;