const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;

const url = '';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);




app.get('/', function (req, res) { 

	client.connect(function(err) {

	  console.log("Connected successfully to server");

	  const db = client.db(dbName);

	    db.collection('documents').find({}).toArray(function(e, r) {
	    	console.log(r);
	    	res.send(r);
	     
	     });
	  });



	// res.send('Hello World!')

	});

app.get('/vanilla', function (req, res) { 

		client.connect(function(err) {
	
		  console.log("Connected successfully to server");
	
		  const db = client.db(dbName);
	
			db.collection('documents').find({'name':'Basic Pizza'}).toArray(function(e, r) {
				console.log(r);
				res.send(r);
			 
			 });
		  });
	
	
	
		// res.send('Hello World!')
	
		});

app.use(function(req, res, next) {
   console.log("Use access control");
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));