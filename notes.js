
var addNote=(title,body)=>{
	console.log('Adding Note',title,body);
};

var getAll=(title,body)=>{
	console.log('Getting All Notes',title,body);
};

var getNote=(title,body)=>{
	console.log('Getting Note',title,body);
};
var removeNote=(title,body)=>{
	console.log('Removing Note',title,body);
};

module.exports={
	addNote,
	getAll,
	getNote,
	removeNote
};