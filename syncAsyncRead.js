
//Async File Read

const fs=require("fs");

data=fs.readFile("syncAsyncRead.txt","utf-8",function(err,data){
console.log("1st Response"+data);
});
console.log("Completed1")

// Sync File Read

data1=fs.readFileSync("syncAsyncRead.txt","utf-8");

	console.log("2nd Response"+data1);

console.log("Completed2")

fs.writeFile("syncAsyncRead.txt","Hi SMS",function(err){
// console.log(err);
});

console.log("Write1 Completed");


// oldfilename,newfilename
//	Async Rename file
fs.rename("syncAsyncRead1.txt","syncAsyncRead.txt",function(err){
	console.log(err);
});

//to delete file unlink method is used
/*
fs.unlink("filename.extention");
*/

