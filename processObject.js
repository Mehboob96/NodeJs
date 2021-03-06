console.log("Starting App....");

const fs=require("fs");

const yargs=require("yargs");
const notes=require("./notes.js");

const argv=yargs.argv;
var command=argv._[0];

console.log("Command : "+command);
console.log("Yargs : "+argv);

if(command === 'add'){
	notes.addNote(argv.title,argv.body);
}
else if(command === 'list'){
	notes.getAll();
}

else if(command === 'read'){
	notes.getNote(argv.title);
}
else if(command === 'remove'){
	notes.removeNote(argv.title);
}
else{
	console.log("Command Not Recognized");
}
