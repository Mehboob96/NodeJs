var events = require('events');

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (a) {
  console.log("Event Lisen" +a);
}

var arr=["win","lose","draw"];

//Assign the eventhandler to an event:
for(a in arr){
eventEmitter.on(arr[a], myEventHandler);
eventEmitter.emit(arr[a]," "+arr[a]+ 'hora');


/*eventEmitter.on('lose', myEventHandler);
eventEmitter.on('draw', myEventHandler);
*/

}
//Fire the 'scream' event:
/*
eventEmitter.emit('win',' win hora');
eventEmitter.emit('win','win hora');
eventEmitter.emit('draw','draw hui');
*/