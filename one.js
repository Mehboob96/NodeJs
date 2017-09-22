// var a='SMS';
// console.log(a);

/*var a="Sohail";
	function scope() {
		// body...
	for(var i=0;i<2;i++){
		let i1 = "15DCO68";
		let i2 = "14CO68"
		console.log("Name : ",a," Roll No : ",i1)
	}
}*/

	//	Scope :- block scope,local scope,global scope

/*var a=10;
function abc(){
	let b=20;
	console.log(b);
}
console.log(a);
abc();
*/

/*var a=10
if(a>10){
	console.log("Value is Greater than 10");
}
else if(a>5){
	console.log("Value is Greater than 5");
}
else{
	console.log("Value is less than 5");
}*/
/*
var arr = [1,2,"SMS",4,5.0];

for (var i =0; i < arr.length; i++) {
	console.log(arr[i]);
}*/
var obj = {
	name:"SMS",
	rollno:"15DCO68"
}/*
for (a in obj){
	console.log(obj['key1']);
}*/



//		for of
var arr=[10,20,30,40,50];
for (a in arr){
	console.log(a);
}

for (a in obj){
	console.log(obj[a]);
}
