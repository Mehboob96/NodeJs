//Routing file
//bodyparser is used for to decode

var express = require("express");
const bodyparser = require("body-parser");

urlencode=bodyparser.urlencoded({extended:false});


var app = express();
/*

console.log(app);*/


app.set('view engine','ejs');

//Server Creation in Express


port=3001
app.listen(port,function(){
	console.log("Yes App is listening on Port"+port)
});

app.get('/',function(req,res){
	res.send("This is sending to browser through response")
});

app.get('/sms',function(req,res){
	res.send("This is SMS Page.")
});

//Dynamic Routing

app.get('/profile/:id',function(req,res){
	res.send("This is parameterized Response : "+req.params.id);
	console.log(req);
})

/*app.get('/view',function(req,res){
	res.sendFile(__dirname+'/View/viewFile.html');
})
*/
// for ejs file use render rather than sendFile
app.get('/view',function(req,res){
	res.render(__dirname+'/View/viewFile.ejs');
})


/*app.get('/contact',function(req,res){
	res.render(__dirname+'/View/contact.ejs');
})
*/
app.get('/login',function(req,res){
	// res.render(res.params.name);
	res.render(__dirname+'/View/login.ejs');
})


//post method


app.post('/login',urlencode,function(req,res){
	res.send(req.body);
});


//usage combine get and post

app.route('/contact').get(function(req,res){
	res.render(__dirname+'/View/contact.ejs');
}).
post(urlencode,function(req,res){
	res.send(req.body);
});
/*
app.get('/loginmid/:id',function(req,res,next){
	if (req.params.id=='sms') {
		res.send(req.params.id+" is Valid User");
	}
	else{
		res.send(req.params.id+" is InValid User");
	}
})
*/

app.route('/loginmid').get(function(req,res,next){
	res.render(__dirname+'/View/login.ejs');
}).
post(urlencode,function(req,res,next){
	if (req.body.username=='sms') {
		res.send(req.body.username+" is Valid User");
		// console.log(next);
	}
	else{
		res.send(req.body.username+" is InValid User");
	}
});
