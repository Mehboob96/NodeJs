var express = require("express");

var app = express();

app.set('view engine','ejs');


port=8003;
app.listen(port,function(){
	console.log("Yes App is listening on Port"+port)
});


var mysql=require("mysql");

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"nodeworkshop"
});

con.connect(function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Succesfuly conected");
	}
})

app.get('/query',function(req,res){
	con.query("create table log (username varchar(200),password varchar(200))",function(err,result){
		if(err){
			console.log(err);
		}
	});
});

app.get('/selectquery',function(req,res){
	con.query("SELECT * FROM login",function(err,result){
		if(err){
			console.log(err);
		}
		else{
			res.send(result);
		}
	});
});

