const fs = require("fs");
var data = "Hi Shaikh Mehboob Siraj The Programmer is here..!";

writeStream=fs.createWriteStream("writeStream.txt");

writeStream.write(data);

writeStream.end();
writeStream.on("finish",function(){
	console.log("finish writing : "+data);
});
writeStream.on("error",function(err){
	if(err){
		console.log("There is Something Wrong");
	}
});