var fs = require('fs');


var args = process.argv.slice(2);

var algorithm;

var configuration = {};

var count = 0;
var line = 0;

function readFile(fileName) {
	fs.readFile(fileName, 'utf8', function(err, contents) {
		console.log(contents);
		line++;
		JSON.parse(contents, function(k, v) {
			count++;
			configuration[k] = v;
			console.log(k + " = " + configuration[k]);
		});                           // { p: 10 }
		console.log("~~~~~~~~~~~~~~~~~~~~ " + line + " --- " + count);
	});

}
 

for (var i = 0; i < args.length; i++) {
	console.log('-- ' + args[i] + " index = " + i + " array = " + args);

	switch (args[i]) {
		case '-a':
			i++;
			algorithm = args[i];	
			break;
	
		case '-f':
			i++;
			readFile(args[i]);
			break;
	}
}

 
 
