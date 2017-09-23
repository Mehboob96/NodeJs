const fs=require("fs");
var data="";

readStream=fs.createReadStream("readStream.txt");

readStream.on("data",function(chunk){
	data+=chunk;
	console.log("Chunk1 :"+chunk)
});

readStream.on("end",function(){
	// console.log(data);
});

readStream.on("error",function(err){
	if(err){
		console.log("There is Something Wrong");
	}
	else{
		console.log("There is No Error");
	}
});
