
/*var a=10;

typeof a;

/
var myfunction

myfunction=function(){
	console.log("Hellow")
};

typeof myfunction;

*/
/*
function changeSize(x){
  return function(y){
    var fontSize=x+y;
    document.body.style="font-size:"fontSize+"pt";
  }
}
/*
var adder10=makeAdder(10);
var adder20=makeAdder(20);
var adder30=makeAdder(30);
*/

/*
makeAdder(5)(10);
makeAdder(5)(15);
makeAdder(10)(20);
*/
/*
var fontIncrementBase16=changeSize(16)

fontIncrementBase16(1);
*/

/*					Destructure
var obj={
  a:1,
  b:2,
  c:{x:1,y:2}
};

const {a,b,c} = obj;
console.log(a,b,c);
*/

// spread operator

var arr1=[1,2,3,4,5,6];
var arr2=[...arr1,5,6];
//console.log(arr1);
console.log(arr2);